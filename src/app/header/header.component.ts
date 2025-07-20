import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../environments/environment';
import { profesionalService } from '../services/profesional.service';
import { AuthService } from '../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profesionales: any[] = [];
  public adminEmail = environment.adminEmail;

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