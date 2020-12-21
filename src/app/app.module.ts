import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabelaComponent as TabelaCursosComponent } from './cursos/tabela/tabela.component';
import { TabelaComponent as TabelaUsuariosComponent } from './user/tabela/tabela.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './cursos/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaCursosComponent,
    TabelaUsuariosComponent,
    FormularioComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
