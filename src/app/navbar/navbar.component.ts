import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  menuBtnFunction(hamburgerBtn:HTMLElement,hamburgerModal:HTMLElement,navbar:HTMLElement) {
    hamburgerBtn.classList.toggle("active");
    hamburgerModal.classList.toggle('active');
    navbar.classList.toggle('active');
    console.log('clicked!');
}
}
