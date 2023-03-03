import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string='';
  password: string='';
  constructor(private backend:BackendService){}
  login():void{
    if(this.username && this.password){
      this.backend.login(this.username,this.password);
    }
  }
}
