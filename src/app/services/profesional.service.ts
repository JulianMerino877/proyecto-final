import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { profesional } from '../models/profesional';

@Injectable({
  providedIn: 'root'
})
export class profesionalService {

  constructor() { }

  // ...código existente...
profesionales: profesional[] = [
    { id: "1", nombre: 'juan', especialidad: 'Literatura', honorarios: 1000, imagen: 'icons/juan.png', experiencia: '5 años', correo: 'juan@mail.com', telefono: '555-1234', ubicacion: 'Andahuaylas' },
    { id: "2", nombre: 'maria', especialidad: 'Matemáticas', honorarios: 1200, imagen: 'icons/maria.png', experiencia: '8 años', correo: 'maria@mail.com', telefono: '555-5678', ubicacion: 'Cuzco' },
    { id: "3", nombre: 'pedro', especialidad: 'Ciencias', honorarios: 800, imagen: 'icons/pedro.png', experiencia: '3 años', correo: 'pedro@mail.com', telefono: '555-9012', ubicacion: 'Lima' }
];
// ...código existente...

  getProfesionales(): Promise<profesional[]> {
    return Promise.resolve(this.profesionales);
  }

  getProfesionalById(id: string | null): Promise<profesional | undefined> {
    return Promise.resolve(this.profesionales.find((profesional) => profesional.id === id));
  }
  
}