import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ MatToolbarModule } from '@angular/material/toolbar';
import{ MatButtonModule } from '@angular/material/button';
import{HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    NavbarComponent,
    HomeComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
