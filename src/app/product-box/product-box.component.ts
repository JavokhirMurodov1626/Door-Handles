import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {
  @Input() productCategory:String='';
  @Input() productName:String='';
  @Input() productPrice:Number=0

}
