import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MostrarPerfilComponent } from './mostrar-perfil/mostrar-perfil.component';
import { MostrarPostsComponent } from './mostrar-posts/mostrar-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarPerfilComponent,
    MostrarPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
