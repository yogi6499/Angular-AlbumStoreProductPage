import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTracklistingComponent } from './product-tracklisting.component';

describe('ProductTracklistingComponent', () => {
  let component: ProductTracklistingComponent;
  let fixture: ComponentFixture<ProductTracklistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTracklistingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTracklistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
