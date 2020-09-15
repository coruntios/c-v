import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  post(obj) {
    return this.http.post('https://mini-api-mage-for-work.herokuapp.com/api/mail/addTomails', obj, 
    // return this.http.post('http://localhost:3000/api/mail/addTomails', obj, 
    
    {headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
  }
}
