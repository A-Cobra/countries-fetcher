import { gql } from 'apollo-angular';

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
