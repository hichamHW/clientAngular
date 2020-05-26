import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, NgModel, NgForm, FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { NavmainComponent } from './navmain/navmain.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatCheckboxModule, MatDatepicker, MatDatepickerModule, MatDatepickerToggle, MatNativeDateModule, MatFormFieldModule, MatProgressBar, MatProgressBarModule, MatTreeModule, MatChipsModule} from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { ShowAllconferenceComponent } from './Components/show-allconference/show-allconference.component';
import { ShowNewconferenceComponent } from './Components/show-newconference/show-newconference.component';
import { ShowScienceconferenceComponent } from './Components/show-scienceconference/show-scienceconference.component';
import { ShowInfoconferenceComponent } from './Components/show-infoconference/show-infoconference.component';
import { ShowDetailConfrerenceComponent } from './Components/show-detail-confrerence/show-detail-confrerence.component';
import { HttpClientModule } from '@angular/common/http';
import { AddConferenceComponent } from './Components/add-conference/add-conference.component';
import { FreeConferenceComponent } from './Components/free-conference/free-conference.component';
import { PayConferenceComponent } from './Components/pay-conference/pay-conference.component';
import { HomeConferenceComponent } from './Components/home-conference/home-conference.component';
import { MyConferenceComponent } from './Components/my-conference/my-conference.component';
import { SearchingConferenceComponent } from './Components/searching-conference/searching-conference.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { SearchQueryComponent } from './Components/search-query/search-query.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
const appRoutes: Routes = [
  { path: 'Contact', component: LoginComponent },
  { path: 'Regsiter', component: RegisterComponent },
  { path: '', component: HomeConferenceComponent ,pathMatch: 'full'},


  { path: 'AddConference', component:  AddConferenceComponent ,pathMatch: 'full'},

  { path: 'AddSession', component:  AddSessionComponent ,pathMatch: 'full'},

  { path: 'ConferenceDetails/:id', component:  ShowDetailConfrerenceComponent ,pathMatch: 'full'},

  { path: 'Search_query/:keywords', component: SearchQueryComponent ,  pathMatch: 'prefix'},

  { path: 'AllConference', component: ShowAllconferenceComponent ,  pathMatch: 'full'},

    ]



@NgModule({
  declarations: [
    AppComponent,
    NavmainComponent,
    LoginComponent,
    RegisterComponent,
    ShowAllconferenceComponent,
    ShowNewconferenceComponent,
    ShowScienceconferenceComponent,
    ShowInfoconferenceComponent,
    ShowDetailConfrerenceComponent,
    AddConferenceComponent,
    FreeConferenceComponent,
    PayConferenceComponent,
    HomeConferenceComponent,
    MyConferenceComponent,
    SearchingConferenceComponent,
    AddSessionComponent,
    SearchQueryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    SlimLoadingBarModule,

    LayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatNativeDateModule,
    MatListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatPasswordStrengthModule,
    MatPasswordStrengthModule,
    MatCardModule,

    MatChipsModule,

    MatTreeModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
