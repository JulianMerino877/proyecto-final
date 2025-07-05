import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { profesionalService } from '../services/profesional.service';
import { AuthService } from '../services/auth.service';
import { NgIf,CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profesionales: any[] = [];

  constructor(
    private profesionalService: profesionalService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.profesionalService.getProfesionales().subscribe(profesionales => {
      this.profesionales = profesionales;
    });
  }

  onLogout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}