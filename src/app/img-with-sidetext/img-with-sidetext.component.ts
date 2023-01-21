import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-img-with-sidetext',
  templateUrl: './img-with-sidetext.component.html',
  styleUrls: ['./img-with-sidetext.component.css']
})
export class ImgWithSidetextComponent {
  @Input() feature:string='';
  @Input() title:string='';
  @Input() text:string='';
  @Input() imgUrl:string='';
  @Input() imgUrl_2:string='';
  @Input() imgUrl_3:string='';
  @Input() reversed=false;
}
