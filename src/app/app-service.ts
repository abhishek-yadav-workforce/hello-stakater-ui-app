import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class StakaterHelloService {
 baseURL: string = "http://localhost:8080/";
 //baseURL: string = "http:/10.168.0.102/"; # Specifiy load balancer ip here

  constructor(private http: HttpClient) {
  }

  getName(): Observable<any> {
    return this.http.get(this.baseURL + 'getName')
  }
}