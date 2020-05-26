import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Sessions} from '../Models/sessions';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }


  addSessionToconference(session: Sessions ,  Id: string)  {

    const  UserUrl = `api/Session/AddSession/Conference/${Id}`;


    return this.http.post(UserUrl,  session);

  }


  AddSalleToSession(idSession: string, Idsalle: string)   {
    const  UserUrl = `api/Session/AddSession/${idSession}/Salleas/${Idsalle}`;
    return this.http.get(UserUrl);


  }

  getSessionConference(Id: string ) {

    const  UserUrl = `api/Session/Conference/${Id}`;

    return this.http.get<Sessions[]>(UserUrl);


  }


 /// UpdateSession/{idSession}
 UpdatesessionId(Id: string, session: Sessions){
  const  UserUrl = `api/Session/UpdateSession/{Id}`;


  return this.http.post(UserUrl,  session);




}

  DeletesessionId(Id: string){
    const  UserUrl = `api/Session/Delete/${Id}`;


    return this.http.delete(UserUrl);



  }

  getsessionId(Id: string){
    const  UserUrl = `api/Session/${Id}`;


    return this.http.get(UserUrl);


  }

}
