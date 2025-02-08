import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  protected http: HttpClient;
  constructor(protected injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  protected get<T>(apiUrl:string, params?:Params):Observable<T>{
    return this.http.get<T>(`${environment.baseUrl}/${apiUrl}`,{params:params})
  }

  protected post<T>(apiUrl:string, requestBody?:T, params?:Params):Observable<T>{
    return this.http.post<T>(`${environment.baseUrl}/${apiUrl}`,requestBody,{params:params})
  }

  protected put<T>(apiUrl:string, requestBody?:T, params?:Params):Observable<T>{
    return this.http.put<T>(`${environment.baseUrl}/${apiUrl}`,requestBody,{params:params})
  }

  protected delete<T>(apiUrl:string, params?:Params):Observable<T>{
    return this.http.delete<T>(`${environment.baseUrl}/${apiUrl}`,{params:params})
  }
}
