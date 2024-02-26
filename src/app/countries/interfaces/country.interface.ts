import { Continent } from './continent.interface';
import { Language } from './language.interface';
import { State } from './state.interface';

export interface Country {
  code: string;
  currencies: string[];
  currency: string;
  name: string;
  continent: Continent;
  capital: string;
  languages: Language[];
  states: State[];
  emoji: string;
}
