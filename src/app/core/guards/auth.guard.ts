import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/modules/login/states/stores/login.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store) {}

  canActivate(): Observable<any> {
    return this.store.select(AuthState.token);
  }
}
