import { Component, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit {
  @Input() photoType : string;
  
  isHeader: string = "";
  overlay_text : string = "";
  constructor(private elementRef : ElementRef) { }

  ngOnInit() {
    console.log(this.photoType);
    switch(this.photoType){
      case "color":
        this.overlay_text = "color photography";
        break;
      case "blackAndWhite":
        this.overlay_text = "black and white photography";
        break;
    }
  }

  convertToHeader(){
    this.isHeader = "isHeader"
    console.log(this.isHeader);
  }

}
