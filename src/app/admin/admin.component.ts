import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { profesionalService } from '../services/profesional.service';
import { AuthService } from '../services/auth.service';
import { authGuard } from '../guards/auth.guard';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  profesionales: any[] = [];
  editingProf: any = null;
  deletingProf: any = null;

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

  startDelete(prof: any) {
    this.deletingProf = prof;
    this.editingProf = null;
  }

  cancelDelete() {
    this.deletingProf = null;
  }

  async confirmDelete() {
    if (this.deletingProf) {
      await this.profesionalService.deleteProfesional(this.deletingProf.id);
      this.loadProfesionales();
      this.deletingProf = null;
    }
  }

  startEdit(prof: any) {
    this.editingProf = { ...prof };
    this.deletingProf = null;
  }

  cancelEdit() {
    this.editingProf = null;
  }

  async saveEdit() {
    if (this.editingProf) {
      await this.profesionalService.updateProfesional(
        this.editingProf.id,
        {
          nombre: this.editingProf.nombre,
          especialidad: this.editingProf.especialidad,
          honorarios: this.editingProf.honorarios,
          telefono: this.editingProf.telefono
        }
      );
      this.loadProfesionales();
      this.editingProf = null;
    }
  }
}
