import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  visibleState: string = "isHidden";
  isVisible: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  sayHello(){
    console.log("hello world");
  }

  toggleMenu(){
    switch(this.isVisible){
      case true:
        this.visibleState = "isVisible";
        this.isVisible = true;
        break;
      case false:
        this.visibleState = "isHidden";
        this.isVisible = false;
        break;
    }
    console.log(this.visibleState);
  }

  closeMenu(){
    this.isVisible = false;
    this.visibleState = "isHidden";
  }

}
