import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { profesionalService } from '../services/profesional.service';
import { profesional } from '../models/profesional';
import { NombrePropioPipe } from '../nombre-propio.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profesional-detail',
  standalone: true,
  imports: [CommonModule, NombrePropioPipe, RouterLink],
  templateUrl: './profesional-detail.component.html',
  styleUrls: ['./profesional-detail.component.css']
})
export class profesionalDetailComponent implements OnInit {
  profesional: profesional | undefined;
  profesionalesFiltrados: profesional[] = [];

  constructor(
    private route: ActivatedRoute,
    private profesionalService: profesionalService
  ) { }

  ngOnInit() {
    // Si quieres cargar todos los profesionales filtrados (por ejemplo, para mostrar una lista relacionada)
    this.profesionalService.getProfesionales()
      .then((profesionales) => {
        this.profesionalesFiltrados = profesionales;
      })
      .catch(error => console.error('Error al obtener los profesionales:', error));

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.profesionalService.getProfesionalById(id)
        .then((prof) => {
          this.profesional = prof;
        })
        .catch(error => console.error('Error al obtener el profesional:', error));
    }
  }
}