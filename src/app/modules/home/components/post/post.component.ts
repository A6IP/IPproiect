import { Component, OnInit } from '@angular/core';
import info from '../../../../_files/info.json';
import { ForumPost } from '../../../../model/forum-post';
import { PostResolverService } from '../../../../service/post-resolver.service';
import { UserService } from '../../../../service/user-service.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public forumPosts: ForumPost[];

  public liked: boolean[];
  public reported: boolean[];

  constructor(private postService: PostResolverService, private userService: UserService) {
    this.liked = [];
    this.reported = [];
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

        let isReported = false;
        post.reports.forEach((userWhoReported) => {
          if (userWhoReported.id == currentUserId) {
            isReported = true;
            return;
          }
        });

        this.liked.push(isLiked);
        this.reported.push(isReported);

      });
    });

  }

  like(i: number): void {
    let currentUserId = this.userService.getID();
    let likedIndex = -1;

    for (let j = 0; j < this.forumPosts[i].likes.length; j++) {
      if (this.forumPosts[i].likes[j].id == currentUserId) {
        likedIndex = j;
        break;
      }
    }

    if (this.liked[i]) {
      if (likedIndex != -1)
        this.forumPosts[i].likes.splice(likedIndex, 1);
    } else {
      if (likedIndex == -1)
        this.forumPosts[i].likes.push({ id: currentUserId });
    }

    this.liked[i] = !this.liked[i];

    this.postService.update(this.forumPosts[i]).subscribe((data: ForumPost) => {
    });
  }

  report(i: number): void {
    let currentUserId = this.userService.getID();
    let reportedIndex = -1;

    for (let j = 0; j < this.forumPosts[i].reports.length; j++) {
      if (this.forumPosts[i].reports[j].id == currentUserId) {
        reportedIndex = j;
        break;
      }
    }

    if (this.reported[i]) {
      if (reportedIndex != -1)
        this.forumPosts[i].reports.splice(reportedIndex, 1);
    } else {
      if (reportedIndex == -1)
        this.forumPosts[i].reports.push({ id: currentUserId });
    }

    this.reported[i] = !this.reported[i];

    this.postService.update(this.forumPosts[i]).subscribe((data: ForumPost) => {
    });
  }

}
