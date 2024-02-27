import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  styleUrls: ['./country-card.component.scss'],
  templateUrl: './country-card.component.html',
  selector: 'app-country-card',
})
export class CountryCardComponent {
  @Input() dataOfCountry!: Country;

  @Input() hasExtendedVersion = true;

  @Output() countryCardClick = new EventEmitter<string>();

  onCountryCardClick(countryCode: string) {
    this.countryCardClick.emit(countryCode);
  }
}
