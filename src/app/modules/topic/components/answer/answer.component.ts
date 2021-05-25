import { Component, OnInit } from '@angular/core';
import post from '../../../../_files/info.json';
import { ActivatedRoute } from '@angular/router';
import { CommentResolverService } from '../../../../service/comment-resolver.service';
import { ForumComment } from 'src/app/model/forum-comment';
import { ForumPost } from 'src/app/model/forum-post';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  comments: ForumComment[];

  constructor(private route: ActivatedRoute, private commentService: CommentResolverService) { }

  ngOnInit(): void {
    this.commentService.findAll().subscribe((data: ForumPost) => {
      this.comments = data.comments;
    });

  }

}
