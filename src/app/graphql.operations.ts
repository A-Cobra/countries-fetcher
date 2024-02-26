import { gql } from 'apollo-angular';
import { GraphQlQueryPayload } from './countries/models/GraphQLQueryPayload.interface';

export const GET_COUNTRIES_DATA = gql`
  query {
    countries(
      filter: { name: { regex: "" }, continent: { in: ["NA", "SA"] } }
    ) {
      code
      currencies
      currency
      name
      continent {
        name
        code
      }
      currency
      code
    }
  }
`;

export function getFilteredCountriesQuery({
  continents,
  searchTerm,
}: GraphQlQueryPayload) {
  const searchTermQuery = `name: { regex: "${getCapitalizedRegex(
    searchTerm
  )}" }`;
  const filters: string[] = [searchTermQuery];
  const continentsQuery =
    continents.length > 0
      ? `continent: { in: ${JSON.stringify(continents)} }`
      : '';

  continentsQuery ? filters.push(continentsQuery) : null;

  const query = `
    query {
      countries(
        filter: { ${filters.join(', ')} } 
      ) {
        code
        currencies
        currency
        name
        continent {
          name
          code
        }
        currency
        code
      }
    }
  `;

  console.log('searchTermQuery');
  console.log(searchTermQuery);
  console.log('searchTermQuery');
  console.log(searchTermQuery);
  console.log('query');
  console.log(query);
  return gql(query);
}

function getCapitalizedRegex(originalString: string): string {
  const words = originalString.split(' ').filter((word) => word);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    console.log('word');
    console.log(word);
    const regex = `[${word.slice(0, 1).toLowerCase()}${word
      .slice(0, 1)
      .toUpperCase()}]${word.slice(1)}`;
    console.log(regex);
    words[i] = regex;
  }
  return words.length > 0 ? words.join(' ') : '';
}
