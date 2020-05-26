import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatPasswordStrengthComponent} from '@angular-material-extensions/password-strength';
import { Register} from '../Models/Register.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {

  showDetails: boolean;
  sumbitclick:boolean = true ;
  addressForm = this.fb.group({

    fullName: [null, Validators.required],
    email: [null, Validators.required],
    password:[null,Validators.required],
    repassword:[null,Validators.required],
    TypeUser:['USER1',Validators.required]

  });

  registerInfo: any;



  constructor(private fb: FormBuilder,private router: Router) {}
  onStrengthChanged(strength: number) {
    ///console.log('password strength = ', strength);
  }


  onPassToPass(){


    console.log('password ');

    this.registerInfo = this.addressForm.value;

    if(this.registerInfo.password == this.registerInfo.repassword){

      this.sumbitclick = false;

      console.log(this.sumbitclick);

    }else{


      this.sumbitclick = true;


      console.log(this.sumbitclick);

    }




  }
  onSubmit() {

    this.registerInfo = this.addressForm.value;

    if(this.addressForm.valid ==true){

      console.log(this.registerInfo);

     /// this.router.navigateByUrl('https://angular.io/guide/router#import-crisis-center-module-into-the-appmodule-routes');
    }else{


      console.log('not valid');
    ///  this.router.navigateByUrl('/');

    }




  }
}
