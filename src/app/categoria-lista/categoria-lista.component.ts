import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { profesionalService } from '../services/profesional.service';
import { profesional } from '../models/profesional';
import { NgFor } from '@angular/common';
import { NombrePropioPipe } from '../nombre-propio.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categoria-lista',
  standalone: true,
  imports: [CommonModule, NgFor, NombrePropioPipe, RouterLink],
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent {
  profesionales: profesional[] = [];
  categoria: string = '';

  constructor(private route: ActivatedRoute, private profesionalService: profesionalService, private router: Router) {
    this.route.params.subscribe(params => {
      this.categoria = params['nombre'];
      this.profesionalService.getProfesionales().subscribe(profesionales => {
        this.profesionales = profesionales.filter(p => (p.especialidad || 'Otros').toLowerCase() === this.categoria.toLowerCase());
      });
    });
  }

  abrirWhatsApp(profesional: profesional, event: Event) {
    event.stopPropagation();
    if (profesional.telefono) {
      const url = `https://wa.me/${profesional.telefono}`;
      window.open(url, '_blank');
    }
  }
}
