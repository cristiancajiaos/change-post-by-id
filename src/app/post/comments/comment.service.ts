import { Comment } from './../../shared/interfaces/comment';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  url = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getComments(id: string): Observable<Comment[]> {
    let idNum = parseInt(id, 10);
    return this.http.get<Comment[]>(`${this.url}/comments`).pipe(
      map(comments => comments.filter(value => value.postId == idNum))
    );
  }
}
