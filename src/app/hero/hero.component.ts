import { Component } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  

  ngAfterViewInit() {
    document.body.onmousemove = function(e) {
      const mouseX = ((e.clientX / window.innerWidth) * 100)-1;
      document.documentElement.style.setProperty('--x',(mouseX)+'vw');
    }

    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.title',

        start: '-50% top',
        end: 'bottom top',
        scrub: true,
        markers: false,
      }
    });

    tl.to('.title',{
      opacity: 0,
      scale: 1.1
    });
    tl.to('.subtitle',{
      start: '-50% top',
      opacity: 0,
    });

  }
}
