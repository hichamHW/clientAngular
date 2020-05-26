import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conference } from '../Models/conference';

@Injectable({
  providedIn: 'root'
})
export class ServiceConferenceService {


  private userUrl = '/api/Conference';

  constructor(private http: HttpClient) { }



  getAllConference() {
    const url = `${this.userUrl}/PubConference`;

    return this.http.get<Conference[]>(url);


  }
  // tslint:disable-next-line: ban-types
  getConferenceById(Id: string) {

    const url = `${this.userUrl}/${Id}`;
    return this.http.get<Conference>(url);

  }


  // tslint:disable-next-line: ban-types
  AddNewConference(conference: Conference, Idprofile: string )  {

    const url = `${this.userUrl}/AddConference/${Idprofile}`;


    return this.http.post(url, conference);
  }

  DeleteConference(Id: string)  {
    const url = `${this.userUrl}/Delete/${Id}`;
    return this.http.delete(url);


  }

NewConference(){

  const url=`${this.userUrl}/OrderBydateJoin`;
  return this.http.get<Conference[]>(url);


}

PayConference(){

  const url=`${this.userUrl}/PayConference`;
  return this.http.get<Conference[]>(url);


}
FreeConference(){

  const url=`${this.userUrl}/FreeConference`;
  return this.http.get<Conference[]>(url);


}
////Category={Keys}

SiencesConference(){

  const url=`${this.userUrl}/Category=Science`;
  return this.http.get<Conference[]>(url);


}

MyConference(Id: string ) {

  const url = `${this.userUrl}/`;
  return this.http.get<Conference[]>(url);


}

InfoConference(){

  const url = `${this.userUrl}/`;
  return this.http.get<Conference[]>(url);


}



SearchConference(KeyWord: string) {
  const url = `${this.userUrl}/Search=${KeyWord}`;

  console.log('is working');
  console.log(url);
  console.log('is key word ' + KeyWord);

  return this.http.get<Conference[]>(url);

}



}
