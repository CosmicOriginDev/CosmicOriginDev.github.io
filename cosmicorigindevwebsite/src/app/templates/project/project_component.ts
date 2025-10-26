import { Component, Input } from '@angular/core';

@Component({
    selector: 'project',
    standalone: true,
    templateUrl: './project_template.html' // Path to the external HTML template
  })
  
export class Project {
    @Input() project_name!: string;
    @Input() project_start!: string;
    @Input() project_end!: string;
    @Input() project_description!: string;
}