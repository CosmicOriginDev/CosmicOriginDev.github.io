import { Component } from '@angular/core';

@Component({
  selector: 'project',
  template_url: 'project_template.html', // Path to the external HTML template
  style_urls: ['style.css']
})
export class ProjectComponent {
  project_name = 'Predatorbot Game';
  project_start = 'test date 1';
  project_end = 'test date 2';
  project_description = 'project description';
}