import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import SwiperCore, { SwiperOptions,Swiper, Virtual } from 'swiper';
import { Navigation,Autoplay } from 'swiper';
import { SwiperComponent } from "swiper/angular";

// install Swiper modules
SwiperCore.use([Navigation,Autoplay, Virtual]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class CarouselComponent {
  @ViewChild('swiper', { static: false }) swiper ?: SwiperComponent | undefined;

  config:SwiperOptions={
    slidesPerView: 4,
    spaceBetween: 42,
    // loop:true,
    autoplay:{
      delay:3000
    },
  };

  slideNext(){
    this.swiper?.swiperRef.slideNext();
  }
  
  slidePrev(){
    this.swiper?.swiperRef.slidePrev(100);
  }

}