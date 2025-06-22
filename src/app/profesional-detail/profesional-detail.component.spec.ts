import { ComponentFixture, TestBed } from '@angular/core/testing';

import { profesionalDetailComponent } from './profesional-detail.component';

describe('profesionalDetailComponent', () => {
  let component: profesionalDetailComponent;
  let fixture: ComponentFixture<profesionalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [profesionalDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(profesionalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
