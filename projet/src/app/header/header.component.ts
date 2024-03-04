import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{

  constructor(private cartService: CartService, private auth: AuthService, private http: HttpClient) {}
  isAuthenticated$ = this.isConnected();
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {console.log(isAuthenticated, this.auth)});
    this.auth.error$.subscribe((error) => {console.log(error)});
    this.auth.user$.subscribe((user) => {console.log(user); console.log(user!.sub)});
    
    //check user id
    this.auth.idTokenClaims$.subscribe((claims) => {console.log(claims)});
    //call /api/external each 5 seconds
    // of(0).subscribe(() => {
    //   setInterval(() => {
    //     console.log(window.location.origin);
        
    //   }, 5000);
    // }
    //);
    
  }
  isCartEmpty() {
    return this.cartService.getItemCount() == 0;
  }

  getCartItemCount() {
    return this.cartService.getItemCount();
  }
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


}
