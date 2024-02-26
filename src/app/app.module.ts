import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesFetcherComponent } from './countries/containers/countries-fetcher/countries-fetcher.component';
import { SidebarComponent } from './countries/components/sidebar/sidebar.component';
import { Mock1Component } from './countries/containers/mock1/mock1.component';
import { Mock2Component } from './countries/containers/mock2/mock2.component';
import { SearchingToolsComponent } from './countries/components/searching-tools/searching-tools.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CountryCardComponent } from './countries/components/country-card/country-card.component';
import { LanguagesPipe } from './countries/pipes/languages.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountriesFetcherComponent,
    SidebarComponent,
    Mock1Component,
    Mock2Component,
    SearchingToolsComponent,
    CountryCardComponent,
    LanguagesPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
