import { Post } from './../shared/interfaces/post';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`);
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.url}/posts/${id}`);
  }
}
