import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient, private router: Router) {}

  login(loginobj: any): Observable<any> {
    return this.http.post(`http://localhost:8800/api/auth/login`, loginobj);
  }

  register(registerobj: any): Observable<any> {
    return this.http.post(`http://localhost:8800/api/auth/register`, registerobj);
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token',tokenValue);
  }
  getToken(){
      return localStorage.getItem('token');
    }

    signOut(){
      localStorage.clear();
      this.router.navigate(['login']);
    }
    isLoggedIn(): boolean{
      if(localStorage.getItem('token')== null){
      return false;}
      else{
        return true;
      }
    }
}
