import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalculateBirthDate } from '../model/calculate-birth-date';

@Injectable({
  providedIn: 'root'
})
export class CalculateBirthDateService {

  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:8080/api";
  private endpoint: string = "calculateBirthDate";
 
  getCalculateBirthDateList() {
    return this.httpClient.get(`${this.url}/${this.endpoint}`);
  }

  findById(id: Number): Observable<CalculateBirthDate> {
    return this.httpClient.get<CalculateBirthDate>(`${this.url}/${this.endpoint}/${id}`);
  }

  update(calculateBirthDate: CalculateBirthDate): Observable<CalculateBirthDate>{
    return this.httpClient.put<CalculateBirthDate>(`${this.url}/${this.endpoint}/${calculateBirthDate.id}`, calculateBirthDate);
  }
}
