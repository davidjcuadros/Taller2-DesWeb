import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taller';
  ROOT_URL= "https://dummyjson.com";

  txtUser:string = "";
  usuario: User | null = null;

  constructor(private http:HttpClient){}

  //user$: Observable<any> = new Observable();
  buscarUsuario(){

    /**
    this.user$ = this.http.get(`${this.ROOT_URL}users/1`);
    this.user$.subscribe(userInfo => {
      this.usuario = userInfo;
    });
    */
    this.http.get(`${this.ROOT_URL}/users/filter?key=username&value=${this.txtUser}`).subscribe({
      next: (response: any) => {
        if(response.users && response.users.length > 0){
          this.usuario = response.users[0];
        } else {
          this.usuario = null;
        }
      }
  })
  }
}
