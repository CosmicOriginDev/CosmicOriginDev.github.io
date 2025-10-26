import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'project',
  standalone: true, // Marking as standalone
  templateUrl: './templates/project_template.html' // Path to the external HTML template
})
export class Project {
  @Input() project_name!: string;
  @Input()  project_start!: string;
  @Input()  project_end!: string;
  @Input()  project_description!: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Project], // Importing the standalone Project component
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cosmicorigindevwebsite');
}

