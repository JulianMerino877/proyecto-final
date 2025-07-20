import { Component } from '@angular/core';
import { profesionalService } from '../services/profesional.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

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
    historial: '',
    correo: '',
    telefono: '',
    ubicacion: ''
  };
  imagenPreview: string | ArrayBuffer | null = null;
  mensaje: string = '';

  constructor(private profesionalService: profesionalService, private authService: AuthService) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 600;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          // Comprimir la imagen a formato JPEG con calidad 0.8
          const dataUrl = canvas.toDataURL('image/jpeg', 0.8);

          this.nuevoProfesional.imagen = dataUrl;
          this.imagenPreview = dataUrl;
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  async agregarProfesional() {
    // Si no hay imagen, poner una por defecto
    if (!this.nuevoProfesional.imagen) {
      this.nuevoProfesional.imagen = 'icons/default.png';
    }
    // Agregar campo createdBy con el email del usuario
    const createdBy = this.authService.currentUser?.email || 'anónimo';
    // Guardar en Firestore
    await this.profesionalService.addProfesional({ ...this.nuevoProfesional, createdBy });
    this.mensaje = '¡Profesional agregado exitosamente!';
    // Limpiar formulario
    this.nuevoProfesional = {
      nombre: '',
      especialidad: '',
      honorarios: null,
      imagen: '',
      experiencia: '',
      historial: '',
      correo: '',
      telefono: '',
      ubicacion: ''
    };
    this.imagenPreview = null;
  }
}