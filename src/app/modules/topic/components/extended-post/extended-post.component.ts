import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Subscription } from 'rxjs';
import post from '../../../../_files/info.json';
import { FinalPost } from '../../../../core/final-post.model';
import { CommentResolverService } from '../../../../service/comment-resolver.service';
import { ForumComment } from 'src/app/model/forum-comment';
import { ForumPost } from 'src/app/model/forum-post';
import { UserService } from '../../../../service/user-service.service'
import { PostResolverService } from '../../../../service/post-resolver.service'

@Component({
  selector: 'app-extended-post',
  templateUrl: './extended-post.component.html',
  styleUrls: ['./extended-post.component.css']
})
export class ExtendedPostComponent implements OnInit {

  private routeSub: Subscription = new Subscription;

  forumPost: ForumPost | undefined;

  public liked: boolean;
  public reported: boolean;

  constructor(private postService: PostResolverService, private route: ActivatedRoute, private commentService: CommentResolverService, private userService: UserService) {
    this.liked = this.reported = false;
  }

  ngOnInit(): void {
    this.commentService.findAll().subscribe((data: ForumPost) => {
      this.forumPost = data;
      let currentUserId = this.userService.getID();

      this.forumPost.likes.forEach((userWhoLiked) => {
        if (userWhoLiked.id == currentUserId) {
          this.liked = true;
          return;
        }
      });

      this.forumPost.reports.forEach((userWhoLiked) => {
        if (userWhoLiked.id == currentUserId) {
          this.reported = true;
          return;
        }
      });
    });
  }

  like() {
    if (this.forumPost == undefined)
      return;

    let currentUserId = this.userService.getID();
    let likedIndex = -1;

    for (let j = 0; j < this.forumPost.likes.length; j++) {
      if (this.forumPost.likes[j].id == currentUserId) {
        likedIndex = j;
        break;
      }
    }

    if (this.liked) {
      if (likedIndex != -1)
        this.forumPost.likes.splice(likedIndex, 1);
    } else {
      if (likedIndex == -1)
        this.forumPost.likes.push({ id: currentUserId });
    }

    this.liked = !this.liked;

    this.postService.update(this.forumPost).subscribe((data: ForumPost) => {
    });
  }

  report() {
    if (this.forumPost == undefined)
      return;

    let currentUserId = this.userService.getID();
    let reportedIndex = -1;

    for (let j = 0; j < this.forumPost.reports.length; j++) {
      if (this.forumPost.reports[j].id == currentUserId) {
        reportedIndex = j;
        break;
      }
    }

    if (this.reported) {
      if (reportedIndex != -1)
        this.forumPost.reports.splice(reportedIndex, 1);
    } else {
      if (reportedIndex == -1)
        this.forumPost.reports.push({ id: currentUserId });
    }

    this.reported = !this.reported;

    this.postService.update(this.forumPost).subscribe((data: ForumPost) => {
    });
  }
}

