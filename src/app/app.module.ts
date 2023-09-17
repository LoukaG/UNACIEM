import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { EmotionsComponent } from './emotions/emotions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { ProjectProcessComponent } from './project-process/project-process.component';
import { FAQComponent } from './faq/faq.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    EmotionsComponent,
    AboutUsComponent,
    StrengthsComponent,
    ProjectProcessComponent,
    FAQComponent,
    BookAppointmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
