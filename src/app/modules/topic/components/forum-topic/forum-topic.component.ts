import { Component, OnInit } from '@angular/core';
import post from '../../../../_files/info.json';
import { FinalPost } from '../../../../core/final-post.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ForumPost } from 'src/app/model/forum-post';
import { CommentResolverService } from '../../../../service/comment-resolver.service';
@Component({
  selector: 'app-forum-topic',
  templateUrl: './forum-topic.component.html',
  styleUrls: ['./forum-topic.component.css']
})
export class ForumTopicComponent implements OnInit {

  finalPost: FinalPost | undefined;
  private routeSub: Subscription = new Subscription;

  //  givenPost:{
  //   id:string,
  //   username:string,
  //   question:string,
  //   answers:string,
  //   description:string,
  //   text:string
  //    }[]=post;

  forumPost: ForumPost | undefined;

  constructor(private route: ActivatedRoute, private commentService: CommentResolverService) {
  }

  ngOnInit(): void {

    this.commentService.findAll().subscribe((data: ForumPost) => {
      this.forumPost = data;
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }


}
