import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  data = [{name: 'Fabio'}, {name: 'Flavio'}]

  constructor() { }

  getData() {
    return Promise.resolve(this.data);
  }

}
