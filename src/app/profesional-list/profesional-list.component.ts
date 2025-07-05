import { Component, OnInit, Input } from '@angular/core';
import { profesionalService } from '../services/profesional.service';
import { profesional } from '../models/profesional';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NombrePropioPipe } from '../nombre-propio.pipe';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profesional-list',
  standalone: true,
  imports: [NgFor, FormsModule, NombrePropioPipe, CommonModule, RouterModule],
  templateUrl: './profesional-list.component.html',
  styleUrls: ['./profesional-list.component.css']
})
export class profesionalListComponent implements OnInit {
  @Input() profesionales: profesional[] = [];
  searchText: string = '';
  profesionalSeleccionado: profesional | null = null;

  constructor(private profesionalService: profesionalService, private router: Router) {}

  ngOnInit() {
    this.profesionalService.getProfesionales().subscribe(data => {
      this.profesionales = data;
    });
  }

  get profesionalesFiltrados(): profesional[] {
    if (!this.searchText) return this.profesionales;
    return this.profesionales.filter(p =>
      p.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  seleccionarProfesional(profesional: profesional) {
    this.profesionalSeleccionado = profesional;
  }

  irAContacto(profesional: profesional) {
    this.router.navigate(['/contacto-profesional'], { queryParams: { id: profesional.id } });
  }

  irADetalles(profesional: profesional) {
    this.router.navigate(['/profesional-detail'], { queryParams: { id: profesional.id } });
  }

  abrirWhatsApp(profesional: profesional, event: Event) {
    event.stopPropagation();
    if (profesional.telefono) {
      const url = `https://wa.me/${profesional.telefono}`;
      window.open(url, '_blank');
    }
  }

  verDetalles(profesional: profesional, event: Event) {
    event.stopPropagation();
    this.router.navigate(['/profesional-detail'], { queryParams: { id: profesional.id } });
  }
}