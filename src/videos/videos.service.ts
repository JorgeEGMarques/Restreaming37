import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

export interface Video {
    id: number,
    title: String,
    description: String,
    url: String,
    thumbnail: String,
    views: number,
    uploadedAt: String
}

@Injectable({
    providedIn: 'root',
})

export class VideosService {
    private apiUrl = 'http://localhost:3000/videos';
    constructor(private httpClient: HttpClient) {}

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
}