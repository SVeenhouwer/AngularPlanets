import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../model/planet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:8080/api";
  private endpoint: string = "planets";

  getPlanetList() {
    return this.httpClient.get(`${this.url}/${this.endpoint}`);
  }

  findPlanetById(id: Number): Observable<Planet> {
    return this.httpClient.get<Planet>('${this.url}/${this.endpoint}/${id}');
  }
}
