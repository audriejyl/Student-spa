import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = 'STUDENT ANGULAR SPA';
  description: string = 'Angular fundamentals assessment project';
  studentCount: number = 40;
  isActive: boolean = true;
}
