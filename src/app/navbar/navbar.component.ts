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

  sayHello(){
    console.log("hello world");
  }

  toggleMenu(){
    switch(this.menuVisible){
      case true:
        this.visibleState = "isVisible";
        this.menuVisible = false;
        console.log('making hidden');
        break;
      case false:
        this.visibleState = "isHidden";
        this.menuVisible = true;
        console.log('making visible');
        break;
    }
  }

  closeMenu(){
    this.menuVisible = false;
    this.visibleState = "isHidden";
  }

}
