import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginPayload, RegisterPayload, ChangePayload } from '../../models/auth.model'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private api: string = 'https://back-end-hpp.herokuapp.com/api/auth';
  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token')
  }

  public login(payload: LoginPayload): Observable<any> {
    return this.http.post<any>(this.api + '/login', payload)
  }

  public register(payload: RegisterPayload): Observable<any> {
    return this.http.post<any>(this.api + '/register', payload)
  }

  public reset(email: String): Observable<any> {
    return this.http.post<any>(this.api + '/resetPassword?email=' + email, '')
  }

  public change(payload: ChangePayload): Observable<any> {
    return this.http.post<any>(this.api + '/changePassword', payload)
  }
  public logout(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  }
}
