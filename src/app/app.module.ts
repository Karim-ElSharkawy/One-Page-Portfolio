import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { TopStickyNavigationComponent } from './top-sticky-navigation/top-sticky-navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    TopStickyNavigationComponent
  ],
  imports: [
    BrowserModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
