import { Component } from '@angular/core';
import { profesionalService } from '../services/profesional.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-profesionales',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './agregar-profesionales.component.html',
  styleUrls: ['./agregar-profesionales.component.css']
})
export class AgregarProfesionalesComponent {
  nuevoProfesional: any = {
    nombre: '',
    especialidad: '',
    honorarios: null,
    imagen: '',
    experiencia: '',
    correo: '',
    telefono: '',
    ubicacion: ''
  };
  imagenPreview: string | ArrayBuffer | null = null;
  mensaje: string = '';

  constructor(private profesionalService: profesionalService) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => this.imagenPreview = reader.result;
      reader.readAsDataURL(file);
      this.nuevoProfesional.imagen = '';
      reader.onloadend = () => {
        this.nuevoProfesional.imagen = reader.result as string;
      };
    }
  }

  async agregarProfesional() {
    // Generar un id único (simple)
    this.nuevoProfesional.id = Date.now().toString();
    // Si no hay imagen, poner una por defecto
    if (!this.nuevoProfesional.imagen) {
      this.nuevoProfesional.imagen = 'icons/default.png';
    }
    // Agregar a la lista (en memoria)
    this.profesionalService.profesionales.push({ ...this.nuevoProfesional });
    this.mensaje = '¡Profesional agregado exitosamente!';
    // Limpiar formulario
    this.nuevoProfesional = {
      nombre: '',
      especialidad: '',
      honorarios: null,
      imagen: '',
      experiencia: '',
      correo: '',
      telefono: '',
      ubicacion: ''
    };
    this.imagenPreview = null;
  }
}