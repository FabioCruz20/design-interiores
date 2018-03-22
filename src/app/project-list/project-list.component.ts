import { Component } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
    'selector': 'app-project-list',
    'templateUrl': 'project-list.component.html',
    'providers': [ProjectService]
})
export class ProjectListComponent {
    people = [];
    constructor(public projectService: ProjectService) {
        this.projectService.getData().then((data) => {this.people = data})
    }

}