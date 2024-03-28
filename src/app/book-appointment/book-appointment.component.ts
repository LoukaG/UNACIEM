import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {
  ngAfterViewInit() {
    let tlContact = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: '-60% center',
        end: '0% center',
        markers: false,
      }
    });

    tlContact.from('#contact', {
      opacity: 0,
      scale: 0.95,
      step: "expoScale(0.5,7,none)"
    });
  }
}
