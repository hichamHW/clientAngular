import { Component, OnInit } from '@angular/core';
import { ServiceConferenceService } from 'src/app/Services/service-conference.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Conference } from 'src/app/Models/conference';
import { Sessions } from 'src/app/Models/sessions';
import { SessionService } from 'src/app/Services/session.service';

@Component({
  selector: 'app-show-detail-confrerence',
  templateUrl: './show-detail-confrerence.component.html',
  styleUrls: ['./show-detail-confrerence.component.css']
})
export class ShowDetailConfrerenceComponent implements OnInit {

sessionss: Sessions[] = [] ;
// tslint:disable-next-line: ban-types
Idconference: string;
conference: Conference;
isOpentable: boolean =  false;
  // tslint:disable-next-line: max-line-length
  constructor(private servicesconference: ServiceConferenceService,private Sessionservices: SessionService , private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {


    console.log(this.route.snapshot.params.id);


    this.getDetailConference(this.route.snapshot.params.id);
    this.getSessionOfconference(this.route.snapshot.params.id);
    this.getSessionOfconference(this.route.snapshot.params.id);
    this.getSessionOfconference(this.route.snapshot.params.id);


    console.log(this.conference);

    console.log(this.sessionss);

    console.log(this.sessionss);

    console.log(this.sessionss);

  }


  // tslint:disable-next-line: ban-types
  getDetailConference(id: string ) {

      this.servicesconference.getConferenceById(id).subscribe(data => this.conference = data);


  }

  getSessionOfconference(id: string )  {
          this.Sessionservices.getSessionConference(id).subscribe(data => this.sessionss = data );

  }



  openTable() {


    this.isOpentable = !this.isOpentable;
  }

}
