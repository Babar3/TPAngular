import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Animal } from './animal';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {



  constructor(private httpClient: HttpClient) { }

  getAnimals(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>('http://localhost:3000/animals')
  }

  delete(id): Observable<Animal> {
    return this.httpClient.delete<Animal>(`http://localhost:3000/animals/${id}`);  
  }


}
