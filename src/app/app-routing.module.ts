import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';


const route: Routes = [
  {path:'home',component:HomeComponent},
  {path:'services',component:LeftComponent},
  {path:'Contactus',component:RightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
