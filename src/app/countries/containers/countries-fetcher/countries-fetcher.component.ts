import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CountriesService } from '../../services/countries.service';
import { GraphQlQueryPayload } from '../../interfaces/graphql-query-payload.interface';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { GenericResponse } from 'src/app/interfaces/generic-response.interface';
import { defaultCountriesQuery } from '../../utils/default-countries-query';

@Component({
  selector: 'app-countries-fetcher',
  templateUrl: './countries-fetcher.component.html',
  styleUrls: ['./countries-fetcher.component.scss'],
})
export class CountriesFetcherComponent implements OnInit {
  dataOfCountries$!: Observable<GenericResponse<Country[]>>;
  isCountrySelected = false;
  dataOfCountryById$!: Observable<GenericResponse<Country>> | undefined;
  previousSelectedCountryCode = '';
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.retrieveDataOfCountries(defaultCountriesQuery);
  }

  retrieveDataOfCountries(queryPayload: GraphQlQueryPayload): void {
    this.dataOfCountries$ =
      this.countriesService.dataOfCountries$(queryPayload);
  }

  onCountrySelection(countryCode: string): void {
    if (this.previousSelectedCountryCode === countryCode) {
      this.resetCountrySelectionParams();
      return;
    }
    this.dataOfCountryById$ =
      this.countriesService.dataOfCountryById$(countryCode);
    this.isCountrySelected = true;
    this.previousSelectedCountryCode = countryCode;
  }

  onCountryCardClickHandle(countryCode: string): void {
    this.onCountrySelection(countryCode);
  }

  onCloseExtendedCard(): void {
    this.resetCountrySelectionParams();
  }

  resetCountrySelectionParams(): void {
    this.dataOfCountryById$ = undefined;
    this.isCountrySelected = false;
    this.previousSelectedCountryCode = '';
  }
}
