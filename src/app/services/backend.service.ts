import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(username:string, password:string):void{
    const form = new FormData()
    form.append('username',username);
    form.append('password',password);
    // this.http.post()
  }
}
