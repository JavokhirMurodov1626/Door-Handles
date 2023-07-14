import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private translateService: TranslateService) {}

  initializeTranslation() {
    this.translateService.addLangs(['en', 'ru']);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  setLanguage(lang: string) {
    this.translateService.use(lang);
  } 
}
