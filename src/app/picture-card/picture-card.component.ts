import { Component, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit {
  @Input() photoType : string;
  @Input() stage: number = 0;
  @Input() route: string = "";
  
  isHeader: string = "";
  overlay_text : string = "";
  category : string = "";
  constructor(private elementRef : ElementRef) { }

  ngOnInit() {
    if(this.stage == 0){
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
    else{
      switch(this.stage){
        case 1:
          this.overlay_text = "Portraits";
          this.category = "portraits";
          console.log(this.category);
          break;
        case 2:
          this.overlay_text = "Wedding";
          this.category = "wedding";
          console.log(this.category);
          break;
        case 3:
          this.overlay_text = "Art";
          this.category = "art";
          console.log(this.category);
          break;
      }
    }
  }

  convertToHeader(){
    this.isHeader = "isHeader"
    console.log(this.isHeader);
  }

}
