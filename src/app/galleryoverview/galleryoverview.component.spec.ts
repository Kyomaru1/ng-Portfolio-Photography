import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryoverviewComponent } from './galleryoverview.component';

describe('GalleryoverviewComponent', () => {
  let component: GalleryoverviewComponent;
  let fixture: ComponentFixture<GalleryoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
