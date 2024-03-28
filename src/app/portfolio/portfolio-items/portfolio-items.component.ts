import { Component, EventEmitter, ChangeDetectorRef, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioItemsComponent {

  currentPage = 1;
  @Input() portfolio = [];
  @Output() selectItemEvent = new EventEmitter<String>();

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) {}

  getPortfolioItems(): any {
    return this.portfolio.slice((this.currentPage - 1) * 3, this.currentPage * 3);
  }

  selectItem(id: String){
    this.selectItemEvent.emit(id);
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
