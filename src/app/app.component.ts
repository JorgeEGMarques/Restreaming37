import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Video, VideosService } from '../videos/videos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Restreaming37';
  videos!: Video[];

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.videosService.getVideos().subscribe((data) => {
      this.videos = data;
    });
  }
}
