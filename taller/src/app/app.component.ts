import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
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
  ROOT_URL ="https://dummyjson.com/";

  username:string = "";
  usuario: User | null = null;

  constructor(private http:HttpClient){}

  user$: Observable<any> = new Observable();
  buscarUsuario(){
    this.user$ = this.http.get(`${this.ROOT_URL}users/1`);
    this.user$.subscribe(userInfo => {
      this.usuario = userInfo;
    });
  }
}
