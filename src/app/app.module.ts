import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { PortfolioItemsComponent } from './portfolio/portfolio-items/portfolio-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutUsComponent,
    StrengthsComponent,
    BookAppointmentComponent,
    PortfolioComponent,
    FooterComponent,
    PortfolioItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
