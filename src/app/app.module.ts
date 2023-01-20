import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { LinkButtonComponent } from './link-button/link-button.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { ReviewBoxComponent } from './review-box/review-box.component';
import { ProductsSectionComponent } from './products-section/products-section.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    WhyChooseUsComponent,
    LinkButtonComponent,
    CarouselComponent,
    ProductBoxComponent,
    ReviewBoxComponent,
    ProductsSectionComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }