import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title;
  config: any;
  showNavbar: boolean = false;
  fullpage_api: any;

  constructor() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['Welcome', 'Experience', 'Projects', 'Skills', 'Contact'],
      menu: '#menu',

      // fullpage callbacks
      afterLoad: (origin, destination, direction) => {
        this.showNavbar = !destination.anchor.includes('Welcome');
        this.title = destination.anchor;
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
