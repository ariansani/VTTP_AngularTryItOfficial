import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items :Product[] = this.cartSvc.getItems();

  constructor(private cartSvc:CartService) { }

  ngOnInit(): void {
  }

}
