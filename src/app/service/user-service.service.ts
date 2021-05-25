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
    return "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0MUVYa3hieVA0aDVvNk5BQ0VTL2hhWUxndzE1Rm1LdDM5SnFZelhmSHlVPSIsImlhdCI6MTYyMTkzNTk3MiwiZXhwIjoxNjIyMDIyMzcyfQ.nuh3vuPv26M3cDv0lE1IOv_3fHE9B4b0VZFjz3jXfaR0D-sVMAilwwfrYDWUOb8ay-qNmDtSIWHYRLkjmc84Jg";
  }
}


