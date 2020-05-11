
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
     
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContact(url: string) {
    return this.http.get(url, httpOptions);
  }
  getContactP(url: string) {
    return this.http.post(url, httpOptions);
  }
 
}