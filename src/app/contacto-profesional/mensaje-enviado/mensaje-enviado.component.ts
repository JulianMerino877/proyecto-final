import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { profesionalService } from '../../services/profesional.service';
import { NombrePropioPipe } from '../../nombre-propio.pipe';
@Component({
  selector: 'app-mensaje-enviado',
  standalone: true,
  templateUrl: './mensaje-enviado.component.html',
  styleUrls: ['./mensaje-enviado.component.css'],
  imports: [NombrePropioPipe]
})
export class MensajeEnviadoComponent implements OnInit {
  nombreProfesional: string = '';

  constructor(
    private route: ActivatedRoute,
    private profesionalService: profesionalService
  ) {}

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.profesionalService.getProfesionalById(id).subscribe(profesional => {
      this.nombreProfesional = profesional ? profesional.nombre : '';
    });
  }
}
}