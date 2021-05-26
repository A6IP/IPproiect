import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForumPost } from 'src/app/model/forum-post';
import { UserService } from './user-service.service'

@Injectable({
  providedIn: 'root'
})
export class PostResolverService {

  private backendurl: string;

  constructor(private http: HttpClient, private userService: UserService) { this.backendurl = 'https://back-end-hpp.herokuapp.com/api/v1/forum' }

  public findAll(): Observable<ForumPost[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.userService.getToken()
      })
    };

    return this.http.get<ForumPost[]>(
      this.backendurl,
      httpOptions
    );
  }

  public save(post: ForumPost) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.userService.getToken()
      })
    };

    return this.http.post<ForumPost>(this.backendurl, post, httpOptions);
  }

  public update(post: ForumPost) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.userService.getToken()
      })
    };

    let likesArr: { id: number; }[] = [];
    let reportsArr: { id: number; }[] = [];

    post.likes.forEach((user) => {
      likesArr.push({ id: user.id });
    });

    post.reports.forEach((user) => {
      reportsArr.push({ id: user.id });
    });

    let body = {
      likes: likesArr,
      reports: reportsArr
    }

    console.log(body);

    return this.http.patch<ForumPost>(this.backendurl + '/' + post.postID, body, httpOptions);
  }
}
