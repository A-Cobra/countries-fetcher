import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Continent } from '../../interfaces/continent.interface';
import { GraphQlQueryPayload } from '../../interfaces/graphql-query-payload.interface';
import { defaultCountriesQuery } from '../../utils/default-countries-query';
import { defaultDataOfContinents } from '../../utils/default-data-of-continents';

@Component({
  selector: 'app-searching-tools',
  templateUrl: './searching-tools.component.html',
  styleUrls: ['./searching-tools.component.scss'],
})
export class SearchingToolsComponent {
  @Output()
  querySearch = new EventEmitter<GraphQlQueryPayload>();

  @ViewChild('countrySearch')
  countrySearch!: ElementRef;

  dataOfContinents: Continent[] = JSON.parse(
    JSON.stringify(defaultDataOfContinents)
  );

  constructor() {}

  onDataOfContinentsChange(index: number): void {
    if (index >= this.dataOfContinents.length) {
      return;
    }
    this.dataOfContinents[index].selected =
      !this.dataOfContinents[index].selected;

    this.onSearchQueryChange();
  }

  onSearchQueryChange(): void {
    const searchTerm = this.countrySearch.nativeElement.value;
    this.querySearch.emit({
      searchTerm,
      continents: this.dataOfContinents
        .filter((dataOfContinent) => dataOfContinent.selected)
        .map((dataOfContinent) => dataOfContinent.code),
    });
  }

  onResetFilters(): void {
    this.countrySearch.nativeElement.value = '';
    this.dataOfContinents = JSON.parse(JSON.stringify(defaultDataOfContinents));
    this.querySearch.emit(defaultCountriesQuery);
  }
}
