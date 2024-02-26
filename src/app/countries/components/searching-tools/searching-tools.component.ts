import { Component, EventEmitter, Output } from '@angular/core';
import { ContinentData } from '../../models/ContinentData.interface';
import { GraphQlQueryPayload } from '../../models/GraphQLQueryPayload.interface';

@Component({
  selector: 'app-searching-tools',
  templateUrl: './searching-tools.component.html',
  styleUrls: ['./searching-tools.component.scss'],
})
export class SearchingToolsComponent {
  @Output()
  querySearch = new EventEmitter<GraphQlQueryPayload>();

  dataOfContinents: ContinentData[] = [
    { name: 'Africa', selected: false },
    { name: 'America', selected: false },
    { name: 'Asia', selected: false },
    { name: 'Europe', selected: false },
    { name: 'Oceania', selected: false },
  ];

  constructor() {}

  onSearchQueryChange(): void {}
}
