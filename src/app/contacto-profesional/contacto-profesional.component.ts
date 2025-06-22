import { Component, OnInit } from '@angular/core';
import { profesionalService } from '../services/profesional.service';
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NombrePropioPipe } from '../nombre-propio.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto-profesional',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NombrePropioPipe, CommonModule],
  templateUrl: './contacto-profesional.component.html',
  styleUrls: ['./contacto-profesional.component.css']
})
export class ContactoProfesionalComponent implements OnInit {
  profesionales: any[] = [];

  constructor(
    private profesionalService: profesionalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.profesionales = await this.profesionalService.getProfesionales();
  }

  esRutaFormulario(): boolean {
    // Devuelve true si la ruta activa es formulario o mensaje-enviado
    const url = this.router.url;
    return url.includes('/contacto-profesional/formulario') || url.includes('/contacto-profesional/mensaje-enviado');
  }
}