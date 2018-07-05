import { Component, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit {
  @Input() photoType : string;
  
  isHeader: string = "";

  constructor(private elementRef : ElementRef) { }

  ngOnInit() {
    console.log(this.photoType);
  }

  convertToHeader(){
    this.isHeader = "isHeader"
    console.log(this.isHeader);
  }

}
