import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { profesionalListComponent } from '../profesional-list/profesional-list.component';
import { profesionalService } from '../services/profesional.service';
import { NombrePropioPipe } from '../nombre-propio.pipe';

@Component({
  selector: 'app-destacados',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, RouterModule, NombrePropioPipe],
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent {
  destacados: any[] = [];
  minHonorarios = 1000;

  constructor(private profesionalService: profesionalService) {
    this.cargarDestacados();
  }

  cargarDestacados() {
    this.profesionalService.getProfesionales().subscribe(profesionales => {
      this.destacados = profesionales.filter(prof => prof.honorarios > this.minHonorarios);
    });
  }
  
  abrirWhatsApp(profesional: any, event: Event) {
    event.stopPropagation();
    if (profesional.telefono) {
      const url = `https://wa.me/${profesional.telefono}`;
      window.open(url, '_blank');
    }
  }
}