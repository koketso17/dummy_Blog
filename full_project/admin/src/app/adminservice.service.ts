import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdminserviceService {

  url = "http://localhost:5000/view";

  constructor(private http: HttpClient) 
  {

  }

  public getDetails()
  {
    return this.http.get<any>(this.url);
  }

  getStud() {
    return this.http.get('http://localhost:5000/view') ;
  }
}
