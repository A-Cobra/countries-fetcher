import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  styleUrls: ['./country-card.component.scss'],
  template: `<div class="country-card">
    <h3>{{ dataOfCountry.name }}</h3>
    <p>{{ dataOfCountry.continent.name }}</p>
  </div>`,
  selector: 'app-country-card',
})
export class CountryCardComponent {
  @Input() dataOfCountry!: Country;
}
