import { Component } from '@angular/core';
import { CartService } from 'src/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public product: any = []
  public grandTotal !: number
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.getProduct().subscribe(res => {
      this.product = res
      this.grandTotal = this.cart.getTotalPrice()
    })
  }

  removeItem(item: any) {
    this.cart.removeCartItem(item)
  }


  emptycart() {
    this.cart.removeAllCart()
  }



}
