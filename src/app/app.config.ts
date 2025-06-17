import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling(
        {scrollPositionRestoration: 'enabled',}
      ),
    ),
    provideClientHydration(withEventReplay()),
    provideMomentDateAdapter(), provideFirebaseApp(() => initializeApp({ projectId: "bledan-studio-dentistico", appId: "1:60460424095:web:8ad149552352f1f40b3baa", storageBucket: "bledan-studio-dentistico.firebasestorage.app", apiKey: "AIzaSyDOyujh-DnR8qsBKS1Gbs3ZRcj2My24O6o", authDomain: "bledan-studio-dentistico.firebaseapp.com", messagingSenderId: "60460424095", measurementId: "G-9KT50PY9VY" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
    /*importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore())
    ])*/
  ]
};

  