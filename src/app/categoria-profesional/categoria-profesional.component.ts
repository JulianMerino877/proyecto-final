import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profesional } from '../models/profesional';
import { profesionalService } from '../services/profesional.service';
import { NgFor } from '@angular/common'; 
import { NombrePropioPipe } from '../nombre-propio.pipe';// Asegúrate de importar el pipe si lo usas en la plantilla
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-categoria-profesional',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './categoria-profesional.component.html',
  styleUrls: ['./categoria-profesional.component.css']
})
export class CategoriaProfesionalComponent {
  categorias: { [key: string]: profesional[] } = {};
  categoriaAbierta: string | null = null;

  iconos: { [key: string]: string } = {
    'Médicos': 'assets/icons/medico.svg',
    'Enfermeras': 'assets/icons/enfermera.svg',
    'Odontólogos': 'assets/icons/odontologo.svg',
    'Psicólogos': 'assets/icons/psicologo.svg',
    'Nutricionistas': 'assets/icons/nutricionista.svg',
    'Servicios de Salud': 'assets/icons/salud.svg',
    'Restaurantes y Comidas': 'assets/icons/restaurante.svg',
    'Spa y Belleza': 'assets/icons/spa.svg',
    'Contadores': 'assets/icons/contador.svg',
    'Fisioterapia y Rehabilitación': 'assets/icons/fisioterapia.svg',
    'Hoteles': 'assets/icons/hotel.svg',
    'Veterinarias': 'assets/icons/veterinaria.svg',
    'Laboratorios Dentales': 'assets/icons/laboratorio.svg',
    'Abogados': 'assets/icons/abogado.svg',
    'Servicios Generales': 'assets/icons/servicio.svg',
    'Inmobiliarias': 'assets/icons/inmobiliaria.svg',
    'Otros': 'assets/icons/otros.svg'
  };

  constructor(private profesionalService: profesionalService, private router: Router) {
    this.profesionalService.getProfesionales().subscribe(profesionales => {
      this.categorias = this.agruparPorCategoria(profesionales);
    });
  }

  agruparPorCategoria(profesionales: profesional[]): { [key: string]: profesional[] } {
    return profesionales.reduce((acc, prof) => {
      const cat = prof.especialidad || 'Otros';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(prof);
      return acc;
    }, {} as { [key: string]: profesional[] });
  }

  getIconoCategoria(nombre: string): string {
    return this.iconos[nombre] || this.iconos['Otros'];
  }

  abrirWhatsApp(profesional: profesional, event: Event) {
    event.stopPropagation();
    if (profesional.telefono) {
      const url = `https://wa.me/${profesional.telefono}`;
      window.open(url, '_blank');
    }
  }

  irACategoria(nombre: string) {
    this.router.navigate(['/categoria-profesional', nombre]);
  }
}
