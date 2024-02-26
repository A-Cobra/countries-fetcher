import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  getCountryById,
  getFilteredCountriesQuery,
} from 'src/app/graphql.operations';
import { GraphQlQueryPayload } from '../interfaces/graphql-query-payload.interface';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private apollo: Apollo) {}

  dataOfCountries$(payload: GraphQlQueryPayload) {
    return this.apollo.watchQuery<{ country: Country[] }>({
      query: getFilteredCountriesQuery(payload),
    }).valueChanges;
  }

  dataOfCountryById$(countryCode: string) {
    return this.apollo.watchQuery<{ country: Country }>({
      query: getCountryById(countryCode),
    }).valueChanges;
  }
}
