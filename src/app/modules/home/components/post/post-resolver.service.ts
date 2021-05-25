import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForumPost } from '../../../../model/forum-post';
import { UserService } from '../../../../service/user-service.service'

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

    return this.http.put<ForumPost>(this.backendurl + '/' + post.postID, post, httpOptions);
  }
}
