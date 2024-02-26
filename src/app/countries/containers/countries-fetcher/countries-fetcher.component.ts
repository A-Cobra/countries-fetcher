import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-fetcher',
  templateUrl: './countries-fetcher.component.html',
  styleUrls: ['./countries-fetcher.component.scss'],
})
export class CountriesFetcherComponent implements OnInit {
  dataOfCountries$!: any;
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.dataOfCountries();
  }
}
