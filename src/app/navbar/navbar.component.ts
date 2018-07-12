import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  visibleState: string = "isHidden";
  menuVisible: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  toggleMenu(){
    switch(this.menuVisible){
      case true:
        this.visibleState = "isHidden";
        this.menuVisible = false;
        break;
      case false:
        this.visibleState = "isVisible";
        this.menuVisible = true;
        break;
    }
  }

  closeMenu(){
    this.menuVisible = false;
    this.visibleState = "isHidden";
  }

}
