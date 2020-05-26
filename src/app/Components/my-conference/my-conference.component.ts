import { Component, OnInit } from '@angular/core';
import { ServiceConferenceService } from 'src/app/Services/service-conference.service';
import { Conference } from 'src/app/Models/conference';

@Component({
  selector: 'app-my-conference',
  templateUrl: './my-conference.component.html',
  styleUrls: ['./my-conference.component.css']
})
export class MyConferenceComponent implements OnInit {
  Myconference: Conference[] = [] ;

  Id: string;
  constructor(private serviceconference: ServiceConferenceService) { }

  ngOnInit() {
    this.getMyconference();
  }

  getMyconference( ) {

    this.serviceconference.MyConference(this.Id).subscribe(data => this.Myconference = data);

  }

  UpdateConference(Id: string ) {


  }

  deleteconference(Id: string){

    this.serviceconference.DeleteConference(Id).subscribe(() => {

   console.log('delete Okay');

    }, () => {

    })
  }
}
