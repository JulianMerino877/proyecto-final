import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profesionalService } from '../services/profesional.service';
import { AuthService } from '../services/auth.service';
import { authGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  profesionales: any[] = [];

  constructor(
    private profesionalService: profesionalService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadProfesionales();
  }

  loadProfesionales(): void {
    this.profesionalService.getProfesionales().subscribe(list => {
      this.profesionales = list;
    });
  }

  async deleteProfesional(id: string) {
    if (confirm('¿Estás seguro de eliminar este profesional?')) {
      await this.profesionalService.deleteProfesional(id);
      this.loadProfesionales();
    }
  }

  async editNombre(prof: any) {
    const nuevo = prompt('Editar nombre:', prof.nombre);
    if (nuevo !== null && nuevo.trim() !== '') {
      await this.profesionalService.updateProfesional(prof.id, { nombre: nuevo });
      this.loadProfesionales();
    }
  }
}
