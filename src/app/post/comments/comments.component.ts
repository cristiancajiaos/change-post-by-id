import { Comment } from './../../shared/interfaces/comment';
import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];
  @Input() id: number = 0;

  constructor(private comment: CommentService) {}

  ngAfterViewInit(): void {
    this.getComments();
  }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.comment.getComments(this.id.toString()).subscribe((comments) => {
      console.log(comments);
      this.comments = comments;
    });
  }
}
