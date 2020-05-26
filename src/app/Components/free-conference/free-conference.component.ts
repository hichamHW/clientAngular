import { Component, OnInit } from '@angular/core';
import { ServiceConferenceService } from 'src/app/Services/service-conference.service';
import { Conference } from 'src/app/Models/conference';

@Component({
  selector: 'app-free-conference',
  templateUrl: './free-conference.component.html',
  styleUrls: ['./free-conference.component.css']
})
export class FreeConferenceComponent implements OnInit {


  Conferences: Conference[] = [];

  constructor(private serviceconference: ServiceConferenceService) { }

  ngOnInit() {

    this.getConferencefree();
  }


  getConferencefree() {

    this.serviceconference.FreeConference().subscribe(data => this.Conferences = data );

  }

}
