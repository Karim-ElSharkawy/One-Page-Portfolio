import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent
  ],
  imports: [
    BrowserModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
