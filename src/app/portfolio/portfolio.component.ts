import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'boxicons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { gsap } from 'gsap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {

  selectedIndex = 0;
  portfolio = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) {
    this.http.get(`${environment.cockpitUrl}/api/content/items/portfolio`).subscribe((data: any) => {
      data.forEach((element: any) => {
        element["imageUrl"] = `${environment.cockpitUrl}/storage/uploads${element["Image"]["path"]}`;
      });

      this.portfolio = data;
      this.selectedIndex = 0;
      this.cdr.detectChanges();
    });
  }

  ngAfterViewInit() {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#portfolio-container',
        start: '-30% center',
        end: '20% center',
        scrub: false,
        markers: false,
      }
    });

    tl2.from('#view-portfolio', {
      opacity: 0,
    });

    tl2.to('#view-portfolio', {
      opacity: 1,
      step: "expoScale(0.5,7,none)"
    });

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#portfolio-items',
        start: '-170% center',
        end: '20% center',
        scrub: false,
        markers: false,
      }
    });

    tl3.from('#portfolio-items', {
      opacity: 0,
      step: "expoScale(0.5,7,none)"
    });

    tl3.to('#portfolio-items', {
      opacity: 1,
      step: "expoScale(0.5,7,none)"
    });

  }
  getCurrentImage(): String {
    return this.portfolio[this.selectedIndex]["imageUrl"];
  }

  getCurrentVideo(): String {
    return this.portfolio[this.selectedIndex]["youtube_url"];
  }

  isCurrentVideo(): boolean {
    return Object.values(this.portfolio[this.selectedIndex]).includes("youtube_url");
  }

  getEmbeddedUrl(): SafeResourceUrl {
    const videoId = this.extractVideoId(this.portfolio[this.selectedIndex]["youtube_url"]);
    const embeddedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&color=white`;

    return this.sanitizer.bypassSecurityTrustResourceUrl(embeddedUrl);
  }

  extractVideoId(url: string): string {
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    let match;
    while ((match = regex.exec(url)) !== null) {
      if (match[1] === 'v') {
        return match[2];
      }
    }
    return "";
  }

  selectItem(id: String) {

    this.selectedIndex = this.portfolio.findIndex(item => item["_id"] == id);
    this.cdr.detectChanges();
  }


}
