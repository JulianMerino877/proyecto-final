import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profesionalListComponent } from '../profesional-list/profesional-list.component';
import { profesionalService } from '../services/profesional.service';
import { NombrePropioPipe } from '../nombre-propio.pipe';

@Component({
  selector: 'app-destacados',
  standalone: true,
  imports: [CommonModule, NombrePropioPipe],
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
}