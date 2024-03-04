import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { CartService } from './cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth: AuthService, private http: HttpClient, private cartService: CartService) { }

  handleLogin(): void {
    this.auth.loginWithPopup().subscribe((user) => {
      console.log(user);
      this.http.post(window.location.origin+'/api/justconnected/', {}).subscribe((data) => {
        console.log(data);
      });
    });
  }
  handleSignUp(): void {
    this.auth.loginWithPopup();
  }
  handleLogout(): void {
    this.cartService.clearCart();
    this.auth.logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  }

  isConnected(){
    console.log(this.auth);
    return this.auth.isAuthenticated$;
  }

  getUser(){
    return this.auth.user$;
  }
}
