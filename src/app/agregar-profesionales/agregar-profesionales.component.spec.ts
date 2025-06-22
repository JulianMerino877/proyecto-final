import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProfesionalesComponent } from './agregar-profesionales.component';

describe('AgregarProfesionalesComponent', () => {
  let component: AgregarProfesionalesComponent;
  let fixture: ComponentFixture<AgregarProfesionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarProfesionalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarProfesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
