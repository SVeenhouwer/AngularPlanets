import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalculatePeriod } from '../model/calculate-period';

@Injectable({
  providedIn: 'root'
})
export class CalculatedPeriodService {
 
  constructor(private httpClient: HttpClient) { }

  private url: string = "http://localhost:8080/api";
  private endpoint: string = "calculatePeriod";

  getCalculatePeriodList() {
    return this.httpClient.get(`${this.url}/${this.endpoint}`);
  }

  findById(id: Number): Observable<CalculatePeriod> {
    return this.httpClient.get<CalculatePeriod>(`${this.url}/${this.endpoint}/${id}`);
  }
 
  update(calculatePeriod: CalculatePeriod): Observable<CalculatePeriod>{
    return this.httpClient.put<CalculatePeriod>(`${this.url}/${this.endpoint}/${calculatePeriod.id}`, calculatePeriod);
  }
}
