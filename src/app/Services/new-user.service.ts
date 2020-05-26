import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private httpNewUser: HttpClient) { }
  UrlHost = 'localhost:8080';

 AddNewUser(NewUser: any) {

     return this.httpNewUser.post(`${this.UrlHost}/profile`, NewUser);

 }



}
