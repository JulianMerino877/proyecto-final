# 📒 Directorio de Profesionales

**Directorio de Profesionales** es una aplicación web en **Angular CLI: 19.2.11** y **Firebase:14.11.0** que permite descubrir, gestionar y contactar con profesionales de distintas especialidades.

## 🛠 Tecnologías y herramientas utilizadas
- Angular CLI: 19.2.11
- Angular Material  
- Firebase (Authentication, Firestore Database, Hosting)  
- TypeScript  
- HTML5 & CSS3  

## ⚙️ Requisitos para instalar y ejecutar
1. Node.js ≥ 18  
2. Angular CLI (`npm install -g @angular/cli`)  
3. Firebase CLI (`npm install -g firebase-tools`)  
4. Cuenta de Firebase con Firestore y Authentication configurados  

## 🚀 Instalación y ejecución
```bash
git clone <tu-repo-url> julian_proyecto
cd julian_proyecto
npm install
ng serve --open
```

## 🏛 Breve descripción de la arquitectura
- Componentes principales  
  - `ProfesionalListComponent`: lista y filtrado de profesionales.  
  - `DestacadosComponent`: muestra destacados con botones WhatsApp y Detalles.  
  - `ProfesionalDetailComponent`: detalle completo de cada profesional.  
  - `LoginComponent` / `RegisterComponent`: manejo de autenticación Google.  
- Servicios  
  - `AuthService`: login/logout y guard (AuthGuard).  
  - `ProfesionalService`: CRUD de profesionales en Firestore.  
  - `ContactService`: envío de mensajes de contacto.  
- Guards  
  - `AuthGuard`: protege rutas de administración (creación/edición).  

## 🌐 URLs de despliegue 
- Hosting Firebase: https://julianjm-d2b81.web.app  
 

## 🎬 Contenido del video 
1. Video(5–8 min): https://youtu.be/q4pfCnDV4OQ?si=VlURsib2UQwyHeNM
2. Funcionalidades principales (listado, destacados, detalle).  
3. Flujo de autenticación Google.  
4. Registro y lectura de datos en Firestore.  
5. Explicación de la estructura de carpetas, componentes,