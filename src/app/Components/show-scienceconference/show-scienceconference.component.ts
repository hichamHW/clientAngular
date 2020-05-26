import { Component, OnInit } from '@angular/core';
import { ServiceConferenceService } from 'src/app/Services/service-conference.service';
import { Conference } from 'src/app/Models/conference';

@Component({
  selector: 'app-show-scienceconference',
  templateUrl: './show-scienceconference.component.html',
  styleUrls: ['./show-scienceconference.component.css']
})
export class ShowScienceconferenceComponent implements OnInit {
  conferences: Conference[] = [];

  constructor(private servicesconference: ServiceConferenceService) { }

  ngOnInit() {
    this.getSienceconference();
  }

  getSienceconference(){
    this.servicesconference.SiencesConference().subscribe(data => this.conferences = data );
  }
}
