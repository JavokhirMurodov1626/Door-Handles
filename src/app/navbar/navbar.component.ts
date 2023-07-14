import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  @Output() selectLang: EventEmitter<string> = new EventEmitter<string>();

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.initializeTranslation();
  }

  menuBtnFunction(
    hamburgerBtn: HTMLElement,
    hamburgerModal: HTMLElement,
    navbar: HTMLElement
  ) {
    hamburgerBtn.classList.toggle('active');
    hamburgerModal.classList.toggle('active');
    navbar.classList.toggle('active');
  }

  changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.translationService.setLanguage(target.value);
  }
}
