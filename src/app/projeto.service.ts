import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjetoService {

  baseUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) { }

  obterProjetos() {
    return this.http.get(this.baseUrl + '/projeto');
  }

  // @param projeto valor json de formulário com dados do projeto criado.
  salvarProjeto(projeto) {
    return this.http.post(this.baseUrl + '/projeto/criar', projeto);
  }
}
