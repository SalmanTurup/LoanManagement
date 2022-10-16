import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  GET(): Observable<any> {
    return this.http.get("http://localhost:8080/Customer/0").pipe(
      map(response => response),
      catchError(error => { throw new Error(error) })
    )
  }

}


