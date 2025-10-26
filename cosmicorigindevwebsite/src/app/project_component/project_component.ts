import { Component } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: 'project_template.html', // Path to the external HTML template
})
export class ProjectComponent {
  project_name = 'Predatorbot Game';
  project_start = 'test date 1';
  project_end = 'test date 2';
  project_description = 'project description';
}