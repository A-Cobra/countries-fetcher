import { ContinentData } from './ContinentData.interface';

export interface GraphQlQueryPayload {
  continents: string[];
  searchTerm: string;
}
