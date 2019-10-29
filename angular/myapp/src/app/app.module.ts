import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { HouseholdComponent } from './household/household.component';
import { ContactComponent } from './contact/contact.component';
import { HomesComponent } from './homes/homes.component';

const appRoutes: Routes=[
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'kitchen', component: KitchenComponent},
  {path:'household', component: HouseholdComponent},
  {path:'contact', component: ContactComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    KitchenComponent,
    HouseholdComponent,
    ContactComponent,
    HomesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
