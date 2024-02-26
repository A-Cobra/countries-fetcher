import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CountriesService } from '../../services/countries.service';
import { GraphQlQueryPayload } from '../../interfaces/graphql-query-payload.interface';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { GenericResponse } from 'src/app/interfaces/generic-response.interface';

@Component({
  selector: 'app-countries-fetcher',
  templateUrl: './countries-fetcher.component.html',
  styleUrls: ['./countries-fetcher.component.scss'],
})
export class CountriesFetcherComponent implements OnInit {
  dataOfCountries$!: Observable<GenericResponse<Country[]>>;
  initialQuery: GraphQlQueryPayload = {
    continents: [],
    searchTerm: '',
  };

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.retrieveDataOfCountries(this.initialQuery);
  }

  retrieveDataOfCountries(queryPayload: GraphQlQueryPayload): void {
    this.dataOfCountries$ =
      this.countriesService.dataOfCountries$(queryPayload);
  }
}
