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
    // Cargar todos los profesionales filtrados (si lo necesitas)
    this.profesionalService.getProfesionales().subscribe({
      next: (profesionales) => {
        this.profesionalesFiltrados = profesionales;
      },
      error: (error) => console.error('Error al obtener los profesionales:', error)
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.profesionalService.getProfesionalById(id).subscribe({
        next: (prof) => {
          this.profesional = prof;
        },
        error: (error) => console.error('Error al obtener el profesional:', error)
      });
    }
  }
}