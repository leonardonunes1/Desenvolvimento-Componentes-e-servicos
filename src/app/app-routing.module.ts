import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { TabelaComponent as TabelaCursosComponent } from './cursos/tabela/tabela.component';
import { TabelaComponent as TabelaUsuariosComponent } from './user/tabela/tabela.component';
import { FormularioComponent } from './cursos/formulario/formulario.component';


const appRoutes: Routes = [
  { path: "cursos/tabela", component: TabelaCursosComponent },
  { path: "usuarios/tabela", component: TabelaUsuariosComponent },
  { path: "novo", component: FormularioComponent },
  { path: "edit/:id", component: FormularioComponent},
  { path: "", redirectTo:"usuarios/tabela", pathMatch:'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
