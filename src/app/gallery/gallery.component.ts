import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  category: string = "";

  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(params => this.category = params.category);
   }

  ngOnInit() {
  }

}
