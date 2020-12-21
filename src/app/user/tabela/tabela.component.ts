import { Component, OnInit, OnChanges } from '@angular/core';
import { Usuario } from '../../usuario';
import { UsuarioService } from '../../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit,OnChanges {
  titulo = "Tabela de Usuarios";
  usuarios: Usuario[] = [];


  constructor(
    private usuarioService: UsuarioService,
    private router: Router
    //private usuarioService: UsuarioService
    ) { }

  ngOnInit() {
    
    //this.usuarios = this.usuarioService.listar();
    this.listar();
  }
  
  ngOnChanges() {
    console.log("Atualizando lista");
    //this.usuarios = this.usuarioService.listar();
    this.listar();
  }

  listar(){
    this.usuarioService.listar().subscribe(
      data => {
        this.usuarios = data;
      },
      error => alert("Error "+error)
    );
  }

  deletar(id: number){
    //this.usuarioService.deletar(id);
    this.usuarioService.deletar(id).subscribe(res => {
      console.log(res);
      this.listar();

    }, err => {
      console.error("Erro: "+err);
    });
  }


}
