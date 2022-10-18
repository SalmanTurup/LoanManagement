import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
  constructor(private http: HttpClient) { }

  GET(url: string): Observable<any> {
    return this.http.get(url).pipe(
      map(response => response),
      catchError(error => { throw new Error(error) })
    )
  }

  POST(url:string,body:any) {
    return this.http.post(url,body,{}).pipe(
      map(response => response),
      catchError(error => { throw new Error(error) })
    )
  }

}


