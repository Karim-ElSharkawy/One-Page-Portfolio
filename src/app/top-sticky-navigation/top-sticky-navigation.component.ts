import {Component, Directive, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-sticky-navigation',
  templateUrl: './top-sticky-navigation.component.html',
  styleUrls: ['./top-sticky-navigation.component.css']
})
export class TopStickyNavigationComponent {

  @Input() showNavbar: boolean = false;
  @Input() title: string;
  ngOnChanges() {
    this.checkNavbarPosition();
  }

  constructor() { }

  checkNavbarPosition() {
    const navbar = document.getElementById("navbar");
    if (this.showNavbar) {
        navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  lowerNavbar() {
    const navbarChecked = document.getElementById('nav-check') as HTMLInputElement;
    if(navbarChecked !== undefined) {
      navbarChecked.checked = false;
    }
  }
}
