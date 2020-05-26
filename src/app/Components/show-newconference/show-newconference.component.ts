import { Component, OnInit } from '@angular/core';
import { Conference } from 'src/app/Models/conference';
import { ServiceConferenceService } from 'src/app/Services/service-conference.service';

@Component({
  selector: 'app-show-newconference',
  templateUrl: './show-newconference.component.html',
  styleUrls: ['./show-newconference.component.css']
})
export class ShowNewconferenceComponent implements OnInit {

  Conferences: Conference[] = [];

  constructor(private  servicesconference: ServiceConferenceService) { }

  ngOnInit() {
    this.getNewConference();
  }


  getNewConference() {

    this.servicesconference.NewConference().subscribe(data => this.Conferences = data);

  }

}
