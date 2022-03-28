import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(
    private post: PostService
  ) { }

  ngOnInit(): void {
    this.post.getPosts().subscribe(posts => {
      console.log(posts);
    });
  }

}
