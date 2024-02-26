import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { GET_COUNTRIES_DATA } from 'src/app/graphql.operations';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private apollo: Apollo) {}

  dataOfCountries() {
    console.log('data of countries');
    this.apollo
      .watchQuery({ query: GET_COUNTRIES_DATA })
      .valueChanges.subscribe(({ data, error }: any) => {
        console.log('data within service');
        console.log(data);
        console.log('error within service');
        console.log(error);
      });
  }
}
