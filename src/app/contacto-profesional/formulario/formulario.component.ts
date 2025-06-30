import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { profesionalService } from '../../services/profesional.service';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { NombrePropioPipe } from '../../nombre-propio.pipe';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ NgIf, RouterLink, NombrePropioPipe],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  profesional: any = null;
  notFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private profesionalService: profesionalService
  ) {}

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.profesionalService.getProfesionalById(id).subscribe(profesional => {
      this.profesional = profesional;
      this.notFound = !this.profesional;
    });
  } else {
    this.notFound = true;
  }}
}