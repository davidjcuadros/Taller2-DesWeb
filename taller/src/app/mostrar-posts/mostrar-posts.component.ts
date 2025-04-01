import { Component, Input, SimpleChanges } from '@angular/core';
import { Comentario } from '../models/Comentario';
import { Post } from '../models/Post';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';  // Importa forkJoin

@Component({
  selector: 'app-mostrar-posts',
  templateUrl: './mostrar-posts.component.html',
  styleUrls: ['./mostrar-posts.component.css']
})
export class MostrarPostsComponent {
  @Input() userId: number | undefined;
  
  posts: Post[] = [];
  postsConComentarios: any[] = [];
  ROOT_URL = "https://dummyjson.com";
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (this.userId) {
      this.cargarPosts();
    }
  }
  ngOnChanges(changes: SimpleChanges) {  // Aquí reaccionamos al cambio de @Input()
    if (changes['userId'] && this.userId) {  // Si el userId ha cambiado
      this.cargarPosts();
    }
  }
  
  cargarPosts() {
    this.http.get<{posts: Post[]}>(`${this.ROOT_URL}/posts/user/${this.userId}`).subscribe({
      next: (response) => {
        this.posts = response.posts;
        const comentariosRequests = this.posts.map(post =>
          this.http.get<{comments: Comentario[]}>(`${this.ROOT_URL}/comments/post/${post.id}`)
        );

        forkJoin(comentariosRequests).subscribe({
          next: (comentariosResponses) => {
            // Combinando el post con sus comentarios
            this.postsConComentarios = this.posts.map((post, index) => ({
              post: post,
              comentarios: comentariosResponses[index].comments
            }));
          },
          error: (error) => console.error('Error al cargar los comentarios:', error)
        });
      },
      error: (error) => console.error('Error al cargar los posts:', error)
    });
  }
}
