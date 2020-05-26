import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceConferenceService } from 'src/app/Services/service-conference.service';
import { Conference } from 'src/app/Models/conference';

@Component({
  selector: 'app-search-query',
  templateUrl: './search-query.component.html',
  styleUrls: ['./search-query.component.css']
})
export class SearchQueryComponent implements OnInit {
  conferences: Conference[]  = []  ;

  textss = '';
  constructor(private myRoute: Router,  private route: ActivatedRoute, private serviceconference: ServiceConferenceService) { }

  ngOnInit() {

    // tslint:disable-next-line: no-unused-expression
  this.textss  =  this.route.snapshot.params.keywords;


  this.Serach_conference( this.route.snapshot.params.keywords);


  }


  Serach_conference(key: string)  {



    this.serviceconference.SearchConference(key).subscribe(data => this.conferences = data);


  }


}
