import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-sticky-navigation',
  templateUrl: './top-sticky-navigation.component.html',
  styleUrls: ['./top-sticky-navigation.component.css']
})
export class TopStickyNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onmousewheel = () => {
      this.checkNavbarPosition()
    };
  }

  checkNavbarPosition() {
    const navbar = document.getElementById("navbar");

    if (!window.location.href.includes('Welcome')) {
      setTimeout(() => {
        navbar.classList.add("sticky")
      }, 600);
    } else {
      console.log("not sticky")
      navbar.classList.remove("sticky");
    }
  }
}
