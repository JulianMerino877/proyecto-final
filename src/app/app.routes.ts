import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { authGuard } from './guards/auth.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/profesional-list', pathMatch: 'full' },
  {
    path: 'profesional-list',
    loadComponent: () =>
      import('./profesional-list/profesional-list.component').then(
        (m) => m.profesionalListComponent
      )
  },
  // Ruta para mostrar texto en /profesional-detail
  {
    path: 'profesional-detail',
    loadComponent: () =>
      import('./profesional-detail/profesional-detail.component').then(
        (m) => m.profesionalDetailComponent
      )
  },
  // Ruta parametrizada para mostrar detalle por id
  {
    path: 'profesional-detail/:id',
    loadComponent: () =>
      import('./profesional-detail/profesional-detail.component').then(
        (m) => m.profesionalDetailComponent
      )
  },
  { path: 'destacados', component: DestacadosComponent },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'agregar-profesionales',
    loadComponent: () => import('./agregar-profesionales/agregar-profesionales.component').then(m => m.AgregarProfesionalesComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent) 
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'categoria-profesional',
    loadComponent: () => import('./categoria-profesional/categoria-profesional.component').then(m => m.CategoriaProfesionalComponent)
  },
  {
    path: 'categoria-profesional/:nombre',
    loadComponent: () => import('./categoria-lista/categoria-lista.component').then(m => m.CategoriaListaComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
    canActivate: [adminGuard]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);