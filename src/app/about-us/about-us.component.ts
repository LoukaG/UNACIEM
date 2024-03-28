import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  ngAfterViewInit() {
    let tlImage = gsap.timeline({
      scrollTrigger: {
        trigger: '.imageCol',
        start: '-75% center',
        end: '0% center',
        scrub: false,
        markers: false,
      }
    });

    tlImage.from('.imageCol', {
      opacity: 0,
      scale: 0.95,
      step: "expoScale(0.5,7,none)"
    });

    let tlText = gsap.timeline({
      scrollTrigger: {
        trigger: '.textCol',
        start: '-75% center',
        end: '0% center',
        scrub: false,
        markers: false,
      }
    });

    tlText.from('.textCol', {
      opacity: 0,
      step: "expoScale(0.5,7,none)"
    });
  }
}
