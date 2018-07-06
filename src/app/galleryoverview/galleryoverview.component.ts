import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-galleryoverview',
  templateUrl: './galleryoverview.component.html',
  styleUrls: ['./galleryoverview.component.scss']
})
export class GalleryoverviewComponent implements OnInit {

  photoType: string = "";

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.photoType = params.photoType);
  }

  ngOnInit() {
  }

}
