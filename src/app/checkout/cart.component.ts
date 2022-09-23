import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items :Product[] = this.cartSvc.getItems();

  checkoutForm = this.fb.group({
    name: '',
    address: ''
  })

  constructor(private cartSvc:CartService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.items = this.cartSvc.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    window.alert("yes, sent order, pls wait")
    this.checkoutForm.reset();
  }

}
