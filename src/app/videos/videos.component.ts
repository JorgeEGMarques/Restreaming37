import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Video, VideosService } from './videos.service';
import { RouterLink } from '@angular/router';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [RouterLink, SearchComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit{
  videos!: Video[];
  filteredVideos!: Video[];
  message: string = '';

  constructor(
    private videosService: VideosService,
  ) {}

  ngOnInit(): void {
    this.videosService.getVideos().subscribe((data) => {
      this.videos = data;
      this.filteredVideos = data;
    });
  }

  prepare(video: Video): SafeResourceUrl {
    return this.videosService.prepare(video.url);
  }

  searchFilter(filtro: string): void {
    this.filteredVideos = this.videos.filter((video) => {
      return video.title.toLowerCase().includes(filtro.toLowerCase());
    })
  }
}
