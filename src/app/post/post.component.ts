import { Post } from './../shared/interfaces/post';
import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id: number = 0;
  currentPost: Post;

  constructor(
    private post: PostService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params?.subscribe(params => {
      let id = params['id'];
      this.id = parseInt(id, 10);
      this.getPost(this.id.toString());
    });
  }

  getPosts(): void {
    this.post.getPosts().subscribe((posts) => {
      console.log(posts);
    });
  }

  getPost(id: string): void {
    this.post.getPost(id).subscribe(post => {
      this.currentPost = post;
    });
  }
}
