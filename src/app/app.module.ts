import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectFormComponent } from './project-form/project-form.component';

import { ProjetoService } from './projeto.service';

const rotas: Routes = [
  { path: 'projetos', component: ProjectListComponent },
  { path: 'criar', component: ProjectFormComponent },
  { path: '', redirectTo: '/projetos', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [ProjetoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
