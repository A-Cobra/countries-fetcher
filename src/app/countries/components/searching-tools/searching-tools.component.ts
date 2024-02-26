import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Continent } from '../../interfaces/continent.interface';
import { GraphQlQueryPayload } from '../../interfaces/graphql-query-payload.interface';

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

  dataOfContinents: Continent[] = [
    { name: 'Africa', selected: false, code: 'AF' },
    { name: 'Antarctica', selected: false, code: 'AN' },
    { name: 'Asia', selected: false, code: 'AS' },
    { name: 'Europe', selected: false, code: 'EU' },
    { name: 'North America', selected: false, code: 'NA' },
    { name: 'South America', selected: false, code: 'SA' },
    { name: 'Oceania', selected: false, code: 'OC' },
  ];

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
    console.log('searchTerm');
    console.log(searchTerm);
    console.log('this.dataOfContinents');
    console.log(this.dataOfContinents);
    this.querySearch.emit({
      searchTerm,
      continents: this.dataOfContinents
        .filter((dataOfContinent) => dataOfContinent.selected)
        .map((dataOfContinent) => dataOfContinent.code),
    });
  }
}
