import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppRoutingModule } from './app/app-routing.module';
import { environment } from './environments/environment';

// @NgModule({
//   imports: [BrowserModule],
//   declarations:[AppComponent],
//   bootstrap: [AppComponent]
// })
// export class AppModule{}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));