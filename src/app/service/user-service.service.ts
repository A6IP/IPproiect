import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getID(): number {
    //TODO: get from local storage
    return 26;
  }

  public getToken(): string {
    //TODO: get from local storage
    return "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0MUVYa3hieVA0aDVvNk5BQ0VTL2hhWUxndzE1Rm1LdDM5SnFZelhmSHlVPSIsImlhdCI6MTYyMjAxODc1MCwiZXhwIjoxNjIyMTA1MTUwfQ.SDTYrHnL9mDgwTqxCtVD_lgfeEb1jcCBZV4REuVIWEqJR0svW2TCQCaOAsea26qTIdp0WGmk-mIKuqsXuloOZw";
  }
}


