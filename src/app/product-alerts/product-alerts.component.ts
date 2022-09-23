import { Component, Input, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "../products";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"],
})
export class ProductAlertsComponent implements OnInit {
  @Input()
  product!: Product;

  @Output()
  onNotify = new Subject<string>();

  constructor() {}

  ngOnInit(): void {}

  notifyParent($event:string){
    const message=$event;
    this.onNotify.next(message)
    console.info("you have been notified from your child")
  }
  
}
