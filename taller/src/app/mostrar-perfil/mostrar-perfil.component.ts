import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/User';


@Component({
  selector: 'app-mostrar-perfil',
  templateUrl: './mostrar-perfil.component.html',
  styleUrls: ['./mostrar-perfil.component.css']
})
export class MostrarPerfilComponent {
  @Input() usuario: User | null = null;
  @Output() verPosts = new EventEmitter<number>();
  mostrarPosts = false;
  
  verPostsUsuario() {
    if (this.usuario) {
      this.mostrarPosts = true;
      this.verPosts.emit(this.usuario.id);
    }
  }
}
