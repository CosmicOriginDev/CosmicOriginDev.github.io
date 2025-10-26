import { Component, Input, signal } from '@angular/core';
import 'zone.js';
import {Project} from './templates/project/project_component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Project], // Importing the standalone Project component
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cosmicorigindevwebsite');
}

