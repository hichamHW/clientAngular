import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog} from '@angular/material';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Router,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-navmain',
  templateUrl: './navmain.component.html',
  styleUrls: ['./navmain.component.css']
})
export class NavmainComponent {


constructor(private breakpointObserver: BreakpointObserver,private _loadingBar: SlimLoadingBarService,private dialog: MatDialog,private myroute: Router) {

    this.myroute.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });


  }



  showLoadingBar = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // tslint:disable-next-line: member-ordering
  openeed = false;

  keyword_search = '' ;


  private navigationInterceptor(event: Event): void {

    if (event instanceof NavigationStart) {

      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {



    this.myroute.events.subscribe(( routerEvent: Event) => {


      if(routerEvent instanceof NavigationStart)  {

        this.showLoadingBar = true;

      } else if (routerEvent instanceof NavigationEnd) {

        this.showLoadingBar = false;



      }

    } );



  }
    sendData()  {


   //// console.log(this.keyword);

    const url = `Search_query/${this.keyword_search}`;


    this.myroute.navigateByUrl(url);


    this.keyword_search = '';
  }

  opened(){


    this.openeed = ! this.openeed;
    console.log(this.openeed);
  }

  signupdialog(){


    this.dialog.open(LoginComponent, {
      height: '50%',
      width: '35%'
  });
  }

  registerdialog(){


    this.dialog.open(RegisterComponent, {
      height: '80%',
      width: '50%'
  });
  }
}
