import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogRegService {

  url: string = "http://localhost:5000/reg";
  url_auth: string = "http://localhost:5000/auth";


  constructor(private http: HttpClient) { }


  add_user(name, email, password) {

    return this.http.post(this.url, { name, email, password});

  }

  public check_user ( email, password ) {

    return this.http.post<any>(this.url_auth, { email: email, password: password});
  }


}
