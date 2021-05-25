import { Component, OnInit } from '@angular/core';
import info from '../../../../_files/info.json';
import { ForumPost } from '../../../../model/forum-post';
import { PostResolverService } from './post-resolver.service';
import { UserService } from '../../../../service/user-service.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public forumPosts: ForumPost[];

  public liked: boolean[];

  constructor(private postService: PostResolverService, private userService: UserService) {
    this.liked = [];
  }


  ngOnInit(): void {
    this.postService.findAll().subscribe((data: ForumPost[]) => {
      this.forumPosts = data;
      let currentUserId = this.userService.getID();
      this.forumPosts.forEach((post) => {
        let isLiked = false;
        post.likes.forEach((userWhoLiked) => {
          if (userWhoLiked.id == currentUserId) {
            isLiked = true;
            return;
          }
        });

        if (isLiked)
          this.liked.push(true);
        else
          this.liked.push(false);
      });
    });

  }

  onClick(i: number): void {
    let currentUserId = this.userService.getID();

    if (this.liked[i]) {
      const userIndex = this.forumPosts[i].likes.indexOf({ id: currentUserId });
      if (userIndex != -1)
        this.forumPosts[i].likes.splice(userIndex, 1);
    } else {
      if (!this.forumPosts[i].likes.includes({ id: currentUserId })) {
        this.forumPosts[i].likes.push({ id: currentUserId });
      }
    }

    this.liked[i] = !this.liked[i];

    console.log(this.postService.update(this.forumPosts[i]));
  }

}
