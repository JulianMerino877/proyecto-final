import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { authGuard } from './guards/auth.guard';
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
    path: 'contacto-profesional',
    loadComponent: () => import('./contacto-profesional/contacto-profesional.component').then(m => m.ContactoProfesionalComponent),
    children: [
      {
        path: 'formulario/:id',
        loadComponent: () => import('./contacto-profesional/formulario/formulario.component').then(m => m.FormularioComponent)
      },
      {
        path: 'mensaje-enviado/:id',
        loadComponent: () => import('./contacto-profesional/mensaje-enviado/mensaje-enviado.component').then(m => m.MensajeEnviadoComponent)
      }
    ]
  },
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
  
];

export const AppRoutingModule = RouterModule.forRoot(routes);