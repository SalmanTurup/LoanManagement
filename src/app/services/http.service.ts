import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  user={
    id:1,
    name:"Salman",
    email:"salmanjt@gmail.com",
    mobile:9527057506
  }
  constructor(private http: HttpClient) { }

  GET(): Observable<any> {
    return this.http.get("http://localhost:8080/Customer/").pipe(
      map(response => response),
      catchError(error => { throw new Error(error) })
    )
  }

  POST() {
    return this.http.post("http://localhost:8080/Customer",this.user).pipe(
      map(response => response),
      catchError(error => { throw new Error(error) })
    )
  }

}


