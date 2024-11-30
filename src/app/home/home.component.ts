import { Component } from '@angular/core';
import { VideosComponent } from '../videos/videos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
