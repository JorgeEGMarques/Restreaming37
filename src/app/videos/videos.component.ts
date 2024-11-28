import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Video, VideosService } from './videos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit{
  videos!: Video[];

  constructor(
    private videosService: VideosService,
  ) {}

  ngOnInit(): void {
    this.videosService.getVideos().subscribe((data) => {
      this.videos = data;
    });
  }

  prepare(video: Video): SafeResourceUrl {
    return this.videosService.prepare(video.url);
  }
}
