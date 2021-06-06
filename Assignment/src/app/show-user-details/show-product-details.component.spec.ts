import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserDetailsComponent } from './show-product-details.component';

describe('ShowUserDetailsComponent', () => {
  let component: ShowUserDetailsComponent;
  let fixture: ComponentFixture<ShowUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
