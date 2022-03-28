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

  id: string = '';
  currentPost: Post;

  constructor(
    private post: PostService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params?.subscribe(params => {
      this.getPost(params['id']);
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
