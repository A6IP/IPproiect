import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginPayload, RegisterPayload } from '../../models/auth.model'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private api: string = 'https://363cfaaa-24de-42af-a619-b09b59604ba9.mock.pstmn.io';
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

  public logout(): void {
    localStorage.removeItem('token')
  }
}