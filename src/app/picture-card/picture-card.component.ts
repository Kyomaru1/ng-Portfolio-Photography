import { Component, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit {
  @Input() photoType : string;
  
  constructor(private elementRef : ElementRef) { }

  ngOnInit() {
    console.log(this.photoType);
  }

}
