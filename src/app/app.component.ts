import { Component } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UNACIEM';

  ngAfterViewInit() {
    console.log("Test")
    gsap.fromTo('#preloader', { opacity: 1 }, { opacity: 0, duration: 1 }).delay(0.5).then(() => {
      console.log("test2")
      document.getElementById('preloader')?.remove();
    });
    
  }
}
