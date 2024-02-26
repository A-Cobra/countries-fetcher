import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mock1Component } from './countries/containers/mock1/mock1.component';
import { Mock2Component } from './countries/containers/mock2/mock2.component';
import { CountriesFetcherComponent } from './countries/containers/countries-fetcher/countries-fetcher.component';

const routes: Routes = [
  { path: 'mock1', component: Mock1Component },
  { path: 'mock2', component: Mock2Component },
  {
    path: 'countries',
    component: CountriesFetcherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
