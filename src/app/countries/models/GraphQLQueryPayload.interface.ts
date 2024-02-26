import { ContinentData } from './ContinentData.interface';

export interface GraphQlQueryPayload {
  dataOfContinents: ContinentData[];
  searchTerm: string;
}
