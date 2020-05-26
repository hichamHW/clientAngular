import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceConferenceService } from 'src/app/Services/service-conference.service';
import { Observable } from 'rxjs';
import { Conference } from 'src/app/Models/conference';

@Component({
  selector: 'app-show-allconference',
  templateUrl: './show-allconference.component.html',
  styleUrls: ['./show-allconference.component.css']
})
export class ShowAllconferenceComponent implements OnInit {


  Conferences: Conference[] = [] ;

  constructor(private route: Router, private ServiceConfernce: ServiceConferenceService) { }

  ngOnInit() {

    this.getALL();

  }




  getALL() {

     this.ServiceConfernce.getAllConference().subscribe(data => this.Conferences = data);

     console.log(this.Conferences);


  }


  getDetails(id: string)  {


  }
  redirectTo(url: string) {

    console.log(url);

    this.route.navigateByUrl('/' + url + '/contact');

  }


}
