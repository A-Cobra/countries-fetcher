import { gql } from 'apollo-angular';
import { GraphQlQueryPayload } from './countries/interfaces/graphql-query-payload.interface';
import { getCapitalizedRegex } from './utils/get-capitalized-regex';

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
        capital
        languages {
          code
          name
        }
        currencies
        states {
          code
          name
        }
        emoji
      }
    }
  `;

  return gql(query);
}

export function getCountryById(countryCode: string) {
  const query = `
  {
    country(code: "${countryCode}") {
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
      capital
      languages {
        code
        name
      }
      currencies
      states {
        code
        name
      }
      emoji
    }
  }
  `;

  return gql(query);
}
