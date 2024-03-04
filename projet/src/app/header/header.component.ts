import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{

  constructor(private cartService: CartService, public user: UserService) {}

  ngOnInit(): void {
    this.user.auth.isAuthenticated$.subscribe((isAuthenticated) => {console.log(isAuthenticated, this.user.auth);});
    this.user.auth.error$.subscribe((error) => {console.error(error)});
    this.user.auth.user$.subscribe((user) => {console.log(user); console.log(user!.sub)});
    
    //check user id
    this.user.auth.idTokenClaims$.subscribe((claims) => {console.log(claims)});
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
  


}
