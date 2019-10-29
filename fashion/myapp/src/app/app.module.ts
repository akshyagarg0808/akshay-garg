import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './card/card.component';

const appRoutes: Routes=[
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'men', component: MenComponent},
  {path:'women', component: WomenComponent},
  {path:'contact', component: ContactComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenComponent,
    WomenComponent,
    ContactComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
