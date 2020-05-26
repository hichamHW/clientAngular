import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Sessions } from '../Models/sessions';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent {

  session: Sessions;
  date: Date ;
  splitted ;

  addressForm = this.fb.group({

    sujet: [null, Validators.required],
    speaker: [null, Validators.required],
    dateBegins: [null, Validators.required],
 timeBegins:[null,Validators.required],
   /// timeEnd: [null, Validators.required],

    dateFins: [null, Validators.required],

  });


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {

  }
  constructor(private fb: FormBuilder) {}

  onAdd() {



  this.date = this.addressForm.value.dateBegins;


  const y = this.addressForm.value.timeBegins.split(':');


  this.date.setHours(+y[0]);
  this.date.setMinutes(+y[1]);
  this.date.setSeconds(0);

  console.log(this.date);


  }
}
