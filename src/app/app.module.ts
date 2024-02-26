import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesFetcherComponent } from './countries/containers/countries-fetcher/countries-fetcher.component';
import { SidebarComponent } from './countries/components/sidebar/sidebar.component';
import { Mock1Component } from './countries/containers/mock1/mock1.component';
import { Mock2Component } from './countries/containers/mock2/mock2.component';

@NgModule({
  declarations: [AppComponent, CountriesFetcherComponent, SidebarComponent, Mock1Component, Mock2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
