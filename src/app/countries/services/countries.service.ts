import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  GET_COUNTRIES_DATA,
  getFilteredCountriesQuery,
} from 'src/app/graphql.operations';
import { GraphQlQueryPayload } from '../models/GraphQLQueryPayload.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private apollo: Apollo) {}

  dataOfCountries$(payload: GraphQlQueryPayload) {
    console.log('data of countries');
    // getFilteredCountriesQuery(payload);
    return this.apollo.watchQuery({ query: getFilteredCountriesQuery(payload) })
      .valueChanges;
  }
}
