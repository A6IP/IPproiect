import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.css']
})
export class UserContactComponent implements OnInit {

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
   onSubmit(data){

    const bearer = localStorage.getItem('bearer');
    const token = `Bearer ${bearer}`;
    console.log(token);
    const httpHeaders = new HttpHeaders({
       'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
       Authorization: token });
    // const httpHeaders = new HttpHeaders();
    // httpHeaders.append('content-type', 'application/json');
    // httpHeaders.append('Authorization', token);
    const message = data.form.value.message;

    console.log(httpHeaders);
    const userEmail = localStorage.getItem('userEmail');
    const sellerEmail = localStorage.getItem('sellerEmail');
    const sendData = {
      emailFrom : userEmail,
      emailTo : sellerEmail,
      message
    };
    console.log(sendData);
    this.http.post('https://hpp-auth.herokuapp.com/api/v1/feedback', sendData, {headers: httpHeaders })
     .subscribe((result) => {
       console.warn('result', result);
     });


  }
}
