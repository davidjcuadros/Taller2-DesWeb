import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taller';
  ROOT_URL = "https://dummyjson.com";

  txtUser: string = "";
  usuario: User | null = null;
  busquedaRealizada: boolean = false; // Nueva propiedad añadida
  isLoading: boolean = false; // Opcional: para manejar estado de carga
  errorMessage: string | null = null; // Opcional: para manejar mensajes de error

  constructor(private http: HttpClient) {}

  buscarUsuario() {
    if (!this.txtUser.trim()) return; // Validación básica

    this.isLoading = true;
    this.busquedaRealizada = false;
    this.errorMessage = null;

    this.http.get(`${this.ROOT_URL}/users/filter?key=username&value=${this.txtUser}`).subscribe({
      next: (response: any) => {
        if (response.users && response.users.length > 0) {
          this.usuario = response.users[0];
        } else {
          this.usuario = null;
        }
        this.busquedaRealizada = true;
      },
      error: (err) => {
        this.errorMessage = 'Error al buscar el usuario';
        this.usuario = null;
        this.busquedaRealizada = true;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
