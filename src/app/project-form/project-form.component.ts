import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms'

import { ProjetoService } from '../projeto.service';


@Component({
    'selector': 'app-project-form',
    'templateUrl': './project-form.component.html',
    'styleUrls' : ['./project-form.component.css']
})
export class ProjectFormComponent {
    projectForm: FormGroup;
    //telefones = [''];

    constructor(private builder: FormBuilder, private projetoService: ProjetoService) {
        this.createForm();
        //console.log(this.tel);
    }

    createForm() {
        this.projectForm = this.builder.group({
            'descricao': ['', Validators.required],
            'data_inicio': ['', Validators.required],
            'data_fim': '',
            'orcamento': [0, Validators.required],
            'cliente': this.builder.group({
                'cpf': ['', Validators.required],
                'nome': ['', Validators.required],
                'endereco': ['', Validators.required],
                'telefones': this.builder.array([this.builder.group({"numero": ""})]),
                'observacoes': '',
                'dependentes': this.builder.array([this.builder.group({"cpf_dependente": "", "nome_dependente": "", "idade_dependente": 0,
                "tipo_relacionamento": "", "relacionamento": ""})])
            })
        });
    }

    get telefones(): FormArray {
        return this.projectForm.get("cliente.telefones") as FormArray;
    }

    adicionaTel() {
        /*this.telefones.push('');
        console.log(this.telefones);*/
        this.telefones.push(this.builder.group({"numero": ""}));
        console.log(this.telefones.controls);
    }

    removeTel(indice) {
        this.telefones.removeAt(indice);
    }

    get dependentes(): FormArray {
        return this.projectForm.get("cliente.dependentes") as FormArray
    }

    addDependente() {
        this.dependentes.push(this.builder.group({"cpf_dependente": "", "nome_dependente": "", "idade_dependente": 0,
            "tipo_relacionamento": "", "relacionamento": ""}))  
        console.log(this.dependentes);
    }

    removeDependente(indice) {
        this.dependentes.removeAt(indice);
    }

    onSubmit() {
        //console.log(this.projectForm.value);
        
        this.projetoService.salvarProjeto(this.projectForm.value).subscribe(res => {
            //console.log('Criação bem sucedida.')
            console.log(res);
            this.projectForm.reset();
        },
        error => {
            //console.log('Erro:')
            console.log(error);
        });
    }

    onReset() {
        this.projectForm.reset();
    }
}