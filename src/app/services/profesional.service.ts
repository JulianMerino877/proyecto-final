import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, docData, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { profesional } from '../models/profesional';

@Injectable({
  providedIn: 'root'
})
export class profesionalService {
  constructor(private firestore: Firestore) {}

  // Obtener todos los profesionales (observable en tiempo real)
  getProfesionales(): Observable<profesional[]> {
    const ref = collection(this.firestore, 'profesionales');
    return collectionData(ref, { idField: 'id' }) as Observable<profesional[]>;
  }

  // Agregar un profesional
  addProfesional(prof: profesional) {
    const ref = collection(this.firestore, 'profesionales');
    return addDoc(ref, prof);
  }

  // Obtener un profesional por ID (observable en tiempo real)
  getProfesionalById(id: string): Observable<profesional> {
    const ref = doc(this.firestore, 'profesionales', id);
    return docData(ref, { idField: 'id' }) as Observable<profesional>;
  }

  // Actualizar un profesional
  updateProfesional(id: string, data: Partial<profesional>) {
    const ref = doc(this.firestore, 'profesionales', id);
    return updateDoc(ref, data);
  }

  // Eliminar un profesional
  deleteProfesional(id: string) {
    const ref = doc(this.firestore, 'profesionales', id);
    return deleteDoc(ref);
  }
}