import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PostResolverService } from '../../../../service/post-resolver.service'
import { ForumPost } from 'src/app/model/forum-post';
import { UserService } from '../../../../service/user-service.service'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  forumPost: ForumPost;

  constructor(private _location: Location, private postService: PostResolverService, private userService: UserService) {
    this.forumPost = new ForumPost();
  }

  ngOnInit(): void {
  }

  goBack() {
    this._location.back();
  }

  onSubmit(event: any) {

    this.forumPost.content = event.target.content.value;
    this.forumPost.title = event.target.title.value;

    this.forumPost.author = {
      id: this.userService.getID(),
      name: "",
      username: "",
      email: ""
    };

    this.postService.save(this.forumPost).subscribe(result => this.goBack());
  }

}
