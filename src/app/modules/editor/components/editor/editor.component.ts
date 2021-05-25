import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommentResolverService } from '../../../../service/comment-resolver.service'
import { ForumComment } from 'src/app/model/forum-comment';
import { UserService } from '../../../../service/user-service.service'

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  forumComment: ForumComment;

  constructor(private _location: Location, private commentService: CommentResolverService, private userService: UserService) {
    this.forumComment = new ForumComment();
  }

  ngOnInit(): void {
  }

  onSubmit(event: any) {
    this.forumComment.content = event.target.content.value;

    this.forumComment.author = {
      id: this.userService.getID(),
      name: "",
      username: "",
      email: ""
    };

    this.commentService.save(this.forumComment).subscribe(result => this.goBack());
  }

  goBack() {
    this._location.back();
  }

}
