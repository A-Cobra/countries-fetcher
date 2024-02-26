import { Continent } from './continent.interface';

export interface GraphQlQueryPayload {
  continents: string[];
  searchTerm: string;
}
