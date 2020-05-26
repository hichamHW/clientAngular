import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Conference } from 'src/app/Models/conference';
import { ServiceConferenceService } from 'src/app/Services/service-conference.service';

@Component({
  selector: 'app-add-conference',
  templateUrl: './add-conference.component.html',
  styleUrls: ['./add-conference.component.css']
})
export class AddConferenceComponent {

  conference: Conference;
  today: number = Date.now();
  Idprofile: string;
  NewConference = this.fb.group({

    theme: [null, Validators.required],
    organizer: [null, Validators.required],
    localisation: [null, Validators.required],
    price: [null],
    description: [null, Validators.required],
    category: [null, Validators.required],
    capacite: [null, Validators.compose([
    Validators.required, Validators.minLength(1), Validators.maxLength(5)])
    ],

    dateDebut: [null,Validators.required],
    dateFin: [null, Validators.required],
    typePayement: ['free', Validators.required]
  });


  free = false;



  categories = [
    {name: 'Art', abbreviation: 'ALs'},
    {name: 'Business', abbreviation: 'ALds'},
    {name: 'Environment', abbreviation: 'AsL'},
    {name: 'Health', abbreviation: 'ALd'},
    {name: 'Personal Growth', abbreviation: 'xAL'},
    {name: 'Religion', abbreviation: 'AcL'},
    {name: 'Technology', abbreviation: 'AzL'},
    {name: 'Science & Research', abbreviation: 'AzL'},
    {name: 'Politics & Laws', abbreviation: 'AzL'},
    {name: 'Lifestyle', abbreviation: 'AzL'},
    {name: 'Biography', abbreviation: 'AzL'},
    {name: 'Academic & Eduction', abbreviation: 'AzL'},
    {name: 'Fiction & Literature', abbreviation: 'AzL'},
    {name: 'Most Popular', abbreviation: 'AzL'},
    {name: 'Others', abbreviation: 'AzL'},
  ];
  constructor(private fb: FormBuilder,private serviceconference: ServiceConferenceService) {}


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {




  }
  FreeOrPaid($event) {

    this.free = !this.free;



  }

  AddNewConefernce() {

   this.conference = this.NewConference.value;
   this.conference.dateJoin = new Date();


   console.log(this.conference);
   if( this.conference.dateFin < this.conference.dateDebut ){

        console.log('error');
   }


   this.Idprofile = '1';
   this.serviceconference.AddNewConference(this.conference, this.Idprofile).subscribe(() => {

    console.log('Is Valid');


   }, () => {

    console.log('Is Not Valid');


   });

  }
}
