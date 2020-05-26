import { Component, OnInit } from '@angular/core';
import { ServiceConferenceService } from 'src/app/Services/service-conference.service';
import { Conference } from 'src/app/Models/conference';

@Component({
  selector: 'app-pay-conference',
  templateUrl: './pay-conference.component.html',
  styleUrls: ['./pay-conference.component.css']
})
export class PayConferenceComponent implements OnInit {

  conferences: Conference[] = [];
  constructor(private servicesconference: ServiceConferenceService) { }

  ngOnInit() {

    this.getPayConference();
  }



  getPayConference() {

    this.servicesconference.PayConference().subscribe(data => this.conferences = data );

  }
}
