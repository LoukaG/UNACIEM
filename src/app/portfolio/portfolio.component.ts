import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'boxicons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PortfolioComponent implements OnInit {

  selectedIndex = 0;
  currentPage = 1;
  portfolio = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.http.get(`${environment.cockpitUrl}/api/content/items/portfolio`).subscribe((data: any) => {
      data.forEach((element: any) => { // Explicitly typing 'element' as 'any'
        element["imageUrl"] = `${environment.cockpitUrl}/storage/uploads${element["Image"]["path"]}`;
      });

      this.portfolio = data;
      this.selectedIndex = 0;

      this.cdr.detectChanges();
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
    const embeddedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&color=white`;

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

  getPortfolioItems(): any {
    return this.portfolio.slice((this.currentPage - 1) * 3, this.currentPage * 3);
  }

  selectItem(id: String){
    this.selectedIndex = this.portfolio.findIndex(item => item["_id"] == id);
  }

  nextPage(){
    if(this.currentPage == (Math.ceil(this.portfolio.length / 3)))
      this.currentPage = 1;
    else
      this.currentPage += 1;
  }

  previousPage(){
    if(this.currentPage == 1)
      this.currentPage = Math.ceil(this.portfolio.length / 3);
    else
      this.currentPage -= 1;
  }



}
