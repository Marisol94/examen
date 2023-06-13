import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json;charset=UTF8'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = 'https://www.mockachino.com/08b33703-f9ee-47/';
  private urlApi = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  sendInfo(data:any): Observable<any>{
    return this.httpClient.post<any>(this.url+'info', data, {observe: 'response'});
  }

  sendInfoApi(data:any): Observable<any>{
    return this.httpClient.post<any>(this.urlApi+'/almacenar', data, httpOptions);
  }

  getCountries(): Observable<any>{
    return this.httpClient.get<any>(this.url+'countries');
  }

  getProvincias(): Observable<any>{
    return this.httpClient.get<any>(this.url+'provincias');
  }

  getSupervisores(): Observable<any>{
    return this.httpClient.get<any>(this.url+'users');
  }
}
