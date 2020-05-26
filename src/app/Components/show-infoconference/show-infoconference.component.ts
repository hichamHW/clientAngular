import { Component, OnInit } from '@angular/core';
import { ServiceConferenceService } from 'src/app/Services/service-conference.service';
import { Conference } from 'src/app/Models/conference';

@Component({
  selector: 'app-show-infoconference',
  templateUrl: './show-infoconference.component.html',
  styleUrls: ['./show-infoconference.component.css']
})
export class ShowInfoconferenceComponent implements OnInit {
  conferences: Conference[] = [];

  constructor(private serviceconference: ServiceConferenceService) { }

  ngOnInit() {

    this.getConferenceInfo();
  }

  getConferenceInfo() {

    this.serviceconference.InfoConference().subscribe(data => this.conferences = data);
  }

}
