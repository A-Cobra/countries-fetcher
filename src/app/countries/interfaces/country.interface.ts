import { Continent } from './continent.interface';

export interface Country {
  code: string;
  currencies: string[];
  currency: string;
  name: string;
  continent: Continent;
}
