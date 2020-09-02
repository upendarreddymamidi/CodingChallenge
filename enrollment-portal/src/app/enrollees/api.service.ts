import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllEnrollees() {
    return this.http.get('http://localhost:8080/enrollees')
    .pipe(data => data);
  }

  getEnrolleeById(id) {
    return this.http.get('http://localhost:8080/enrollees/'+id)
    .pipe(data => data);
  }

  updateEnrollee(id, requestBody) {
    return this.http.put('http://localhost:8080/enrollees/'+id, requestBody)
    .pipe(data => data);
  }
}
