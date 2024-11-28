import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

export interface Video {
    id: number,
    title: string,
    description: string,
    url: string,
    thumbnail: string,
    views: number,
    uploadedAt: string
}

@Injectable({
    providedIn: 'root',
})

export class VideosService {
    private apiUrl = 'http://localhost:3000/videos';
    constructor(
        private httpClient: HttpClient,
        private sanitizer: DomSanitizer
    ) {}

    getVideos(): Observable<Video[]> {
        return this.httpClient.get<Video[]>(this.apiUrl);
    }

    getVideo(id: number): Observable<Video> {
        return this.httpClient.get<Video>(`${this.apiUrl}/${id}`);
    }

    addVideo(Video: Video): Observable<Video> {
        return this.httpClient.post<Video>(this.apiUrl, Video);
    }

    updateVideo(video: Video): Observable<Video> {
        return this.httpClient.put<Video>(
            `${this.apiUrl}/${video.id}`,
            video
        );
    }

    deleteVideo(id: number) {
        return this.httpClient.delete<Video>(`${this.apiUrl}/${id}`);
    }

    prepare(url: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}