import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { LinkButtonComponent } from './link-button/link-button.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { ProductsSectionComponent } from './products-section/products-section.component';
import { SwiperModule } from 'swiper/angular';
import { ImgWithSidetextComponent } from './img-with-sidetext/img-with-sidetext.component';
import { PricesComponent } from './prices/prices.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component'; 
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    WhyChooseUsComponent,
    LinkButtonComponent,
    CarouselComponent,
    ProductBoxComponent,
    ProductsSectionComponent,
    ImgWithSidetextComponent,
    PricesComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
