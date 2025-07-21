import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({ projectId: "julianjm-d2b81", appId: "1:636208725572:web:54cbae104890c38a8fc611", storageBucket: "julianjm-d2b81.firebasestorage.app", apiKey: "AIzaSyAOszS5iZPSzmAP3V_X3VlFey7FOyOvzCQ", authDomain: "julianjm-d2b81.firebaseapp.com", messagingSenderId: "636208725572", measurementId: "G-G0984EFSBG" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};