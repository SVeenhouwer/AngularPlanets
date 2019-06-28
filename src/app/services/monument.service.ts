import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Monument } from '../model/monument';

@Injectable({
  providedIn: 'root'
})
export class MonumentService {

  constructor(private httpClient: HttpClient) { } 

  private url: string = "http://localhost:8080/api";
  private endpoint: string = "monuments";

  getMonumentList() {
    return this.httpClient.get(`${this.url}/${this.endpoint}`);
  }

  findMonumentById(id: Number): Observable<Monument> {
    return this.httpClient.get<Monument>(`${this.url}/${this.endpoint}/${id}`);
  }
}
