import { Component, OnInit, Input } from '@angular/core';
import { profesionalService } from '../services/profesional.service';
import { profesional } from '../models/profesional';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NombrePropioPipe } from '../nombre-propio.pipe';

@Component({
  selector: 'app-profesional-list',
  standalone: true,
  imports: [NgFor, FormsModule, NombrePropioPipe],
  templateUrl: './profesional-list.component.html',
  styleUrls: ['./profesional-list.component.css']
})
export class profesionalListComponent implements OnInit {
  @Input() profesionales: profesional[] = [];
  searchText: string = '';
  profesionalSeleccionado: profesional | null = null;

  constructor(private profesionalService: profesionalService) {}

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
}