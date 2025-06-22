import { ComponentFixture, TestBed } from '@angular/core/testing';

import { profesionalListComponent } from './profesional-list.component';

describe('profesionalListComponent', () => {
  let component: profesionalListComponent;
  let fixture: ComponentFixture<profesionalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [profesionalListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(profesionalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
