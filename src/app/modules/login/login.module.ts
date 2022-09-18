import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './states/stores/login.state';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    /* NgxsModule.forFeature([AuthState]) // Incompatible with current version of Ivy */
  ]
})
export class LoginModule { }
