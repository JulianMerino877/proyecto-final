import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { NgIf,CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  user$: Observable<any>;

  constructor(public authService: AuthService, private router: Router) {
    this.user$ = this.authService.authState$;
  }

  onLogout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
