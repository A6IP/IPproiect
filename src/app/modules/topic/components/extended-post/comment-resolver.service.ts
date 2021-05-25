import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForumComment } from 'src/app/model/forum-comment';
import { Router } from '@angular/router';
import { ForumPost } from 'src/app/model/forum-post';
import { UserService } from '../../../../service/user-service.service'

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService {

  private backendurl: string;

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {
    this.backendurl = 'https://back-end-hpp.herokuapp.com/api/v1/forum'
  }

  public findAll(): Observable<ForumPost> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.userService.getToken()
      })
    };


    let explodedURL = this.router.url.split('/');
    return this.http.get<ForumPost>(this.backendurl + '/' + explodedURL[explodedURL.length - 1], httpOptions);
  }

  public save(post: ForumComment) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.userService.getToken()
      })
    };

    let explodedURL = this.router.url.split('/');
    return this.http.post<ForumComment>(this.backendurl + '/' + explodedURL[explodedURL.length - 2], post, httpOptions);
  }
}
