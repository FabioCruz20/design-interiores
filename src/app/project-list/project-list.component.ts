import { Component } from '@angular/core';
import { ProjectService } from './project.service';

import { ProjetoService } from '../projeto.service';



@Component({
    'selector': 'app-project-list',
    'templateUrl': 'project-list.component.html',
    'providers': [ProjectService],
    'styleUrls': ['project-list.component.css']
})
export class ProjectListComponent {
    projetos;
    constructor(public projetoService: ProjetoService) {
    }

    ngOnInit() {
        this.projetoService.obterProjetos()
        .subscribe(result => {
            this.projetos = result;
            console.log(this.projetos);
        },
        error => {
            console.log('erro:')
            console.log(error);
        });       
    }

    excluir(id, indice) {
        //console.log('excluir');
        //console.log(projeto);
        this.projetoService
        .excluirProjeto(id)
        .subscribe(data => {
            console.log(data);
            this.projetos.splice(indice, 1);
        },
        error => {
            console.log('Erro:');
            console.log(error);
        })
    }
}