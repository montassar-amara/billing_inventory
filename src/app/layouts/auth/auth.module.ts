import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule
  ]
})
export class AuthModule { }
