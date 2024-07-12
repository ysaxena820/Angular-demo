import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name: string = 'Yash Saxena';
 product = { 
  name: 'iPhone X',
  price: 999,
  color: 'Red',
  discount: 8.5,
  inStock: 10,
  pImage: '/assets/images/iphone.jpeg'
 };
 
 getDiscountedPrice() {
  return ((100-this.product.discount) * this.product.price)/100
 }

 onNameChange():void {
  
  this.name = 'Mark';
 }

}
