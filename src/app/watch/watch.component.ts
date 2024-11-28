import { Component, Input, OnInit } from '@angular/core';
import { Video, VideosService } from '../videos/videos.service';

@Component({
  selector: 'app-watch',
  standalone: true,
  imports: [],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.css'
})
export class WatchComponent implements OnInit {
  @Input() id: number = 0;
  video!: Video;

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.videosService.getVideo(this.id).subscribe((data) => {
      this.video = data;

      data.views++;
      this.videosService.updateVideo(data).subscribe({
        next: () => {}
      })
    });
  }

  prepare() {
    return this.videosService.prepare(this.video.url);
  }
}
