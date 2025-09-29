import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private fs : Firestore) { }
  GetDatabase(category : string) {
    let dbCollection = collection(this.fs, category);
    return collectionData(dbCollection,{idField:'id'});
  }
}
