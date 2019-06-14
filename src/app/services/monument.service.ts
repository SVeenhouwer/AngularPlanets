import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  findMonumentById(id: Number) {
    return this.httpClient.get('${this.url}/${this.endpoint}/${id}');
  }
}
