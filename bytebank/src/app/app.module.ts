import { NovaTranferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NovaTranferenciaComponent //todos os componentes precisam ser declarados no app.module.ts
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
