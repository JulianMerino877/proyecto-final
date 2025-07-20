import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profesional } from '../models/profesional';
import { profesionalService } from '../services/profesional.service';
import { NgFor } from '@angular/common'; 
import { NombrePropioPipe } from '../nombre-propio.pipe';// Asegúrate de importar el pipe si lo usas en la plantilla
import { RouterLink, Router } from '@angular/router';
import { PluralCategoriaPipe } from '../plural-categoria.pipe';

@Component({
  selector: 'app-categoria-profesional',
  standalone: true,
  imports: [CommonModule, NgFor, PluralCategoriaPipe],
  templateUrl: './categoria-profesional.component.html',
  styleUrls: ['./categoria-profesional.component.css']
})
export class CategoriaProfesionalComponent {
  categorias: { [key: string]: profesional[] } = {};
  categoriaAbierta: string | null = null;

  iconos: { [key: string]: string } = {
    'médico': '/assets/icons/medicos.svg',
    'docente': '/assets/icons/docente.svg',
    'psicólogo': '/assets/icons/Psicólogos.svg',
    'psicóloga': '/assets/icons/Psicólogos.svg',
    'Contador': '/assets/icons/Contador.svg',
    'contadora': '/assets/icons/Contador.svg',
    'contadores': '/assets/icons/Contador.svg',
    'veterinaria': '/assets/icons/veterinaria.svg',
    'veterinario': '/assets/icons/veterinaria.svg',
    'Veterinario': '/assets/icons/veterinaria.svg',
    'ingeniero': '/assets/icons/ingeniero.svg',
    'ingeniera': '/assets/icons/ingeniero.svg',
    'abogado': '/assets/icons/abogado.svg',
    'abogada':'/assets/icons/abogado.svg',
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

  /**
   * Devuelve la ruta del icono según la categoría, normalizando tildes y singular/plural.
   */
  getIconoCategoria(nombre: string): string {
    const normalize = (s: string) =>
      s.toLowerCase()
       .normalize('NFD')
       .replace(/\p{M}/gu, '');
    const keyNorm = normalize(nombre);
    // 1) Buscar coincidencia exacta
    for (const [key, path] of Object.entries(this.iconos)) {
      if (normalize(key) === keyNorm) {
        return path;
      }
    }
    // 2) Intentar singular (remover 'es' o 's')
    let singular = keyNorm;
    if (singular.endsWith('es')) singular = singular.slice(0, -2);
    else if (singular.endsWith('s')) singular = singular.slice(0, -1);
    for (const [key, path] of Object.entries(this.iconos)) {
      if (normalize(key) === singular) {
        return path;
      }
    }
    // 3) Por defecto, icono 'otros'
    return this.iconos['otros'] || '';
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
