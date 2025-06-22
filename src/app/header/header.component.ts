import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profesionalService } from '../services/profesional.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // <--- aquí el cambio
})
export class HeaderComponent implements OnInit {
  profesionales: any[] = [];

  constructor(private profesionalService: profesionalService) {}

  async ngOnInit() {
    this.profesionales = await this.profesionalService.getProfesionales();
  }
}