import { Component, OnInit, SecurityContext} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video, VideosService } from '../videos/videos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Restreaming37';
  videos!: Video[];

  constructor(
    private videosService: VideosService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.videosService.getVideos().subscribe((data) => {
      this.videos = data;
    });
  }

  prepare(video: Video): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video.url);
  }
}
