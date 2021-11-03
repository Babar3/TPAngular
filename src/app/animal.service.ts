import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Animal } from './animal';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {


  private url = ' https://my-json-server.typicode.com/Babar3/TPAngular/animals'

  constructor(private http: HttpClient) { }

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.url)
  }


}
