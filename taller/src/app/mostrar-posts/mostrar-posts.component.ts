import { Component, Input } from '@angular/core';
import { Comentario } from '../models/Comentario';
import { Post } from '../models/Post';
import { HttpClient } from '@angular/common/http';

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
  
  cargarPosts() {
    this.http.get<{posts: Post[]}>(`${this.ROOT_URL}/posts/user/${this.userId}`).subscribe({
      next: (response) => {
        this.posts = response.posts;
        // Para cada post, cargamos sus comentarios
        this.posts.forEach(post => {
          this.cargarComentarios(post);
        });
      },
      error: (error) => console.error('Error al cargar posts:', error)
    });
  }
  
  cargarComentarios(post: Post) {
    this.http.get<{comments: Comentario[]}>(`${this.ROOT_URL}/comments/post/${post.id}`).subscribe({
      next: (response) => {
        // Agregamos el post junto con sus comentarios a nuestro array
        this.postsConComentarios.push({
          post: post,
          comentarios: response.comments
        });
      },
      error: (error) => console.error(`Error al cargar comentarios del post ${post.id}:`, error)
    });
  }
}

