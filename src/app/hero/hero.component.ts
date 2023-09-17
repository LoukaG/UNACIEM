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
      const mouseX = (e.clientX / window.innerWidth) * 100;
      document.documentElement.style.setProperty('--x',(mouseX)+'vw');
    }

    
    /*let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#title2',

        start: '-100% center',
        end: 'bottom center',
        scrub: true,
        markers: true,
      }
    });

    tl.to('#title2',{
      x: 800
    })*/
  }
}
