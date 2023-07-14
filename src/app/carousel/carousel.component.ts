import {
  Component,
  ViewEncapsulation,
  ViewChild,
  Input,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import SwiperCore, { SwiperOptions, Swiper } from 'swiper';
import { Navigation, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Product } from '../all-products';
import { categories } from '../all-products';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent | undefined;
  @Input() fetchedProducts: Product[] = [];
  swiperInstance: Swiper | undefined;

  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 42,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 42,
      },
    },
  };

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }

  ngOnDestroy(): void {
    this.destroySwiper();
  }

  initializeSwiper(): void {
    if (this.swiper && this.swiper.swiperRef) {
      this.swiperInstance = this.swiper.swiperRef;
    }
  }

  destroySwiper(): void {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
    }
  }

  ngOnChanges(): void {
    setTimeout(() => {
      this.updateSwiper();
    }, 0);
  }

  updateSwiper(): void {
    if (this.swiperInstance) {
      this.swiperInstance.update();
    }
  }

  slideNext(): void {
    if (this.swiperInstance) {
      this.swiperInstance.slideNext();
    }
  }

  slidePrev(): void {
    if (this.swiperInstance) {
      this.swiperInstance.slidePrev();
    }
  }
  getCategory(id: number) {
    const category = categories.find((category) => category.id === id);
    if (category) {
      return category.name;
    }
    return '';
  }
}
