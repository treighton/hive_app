import { gql } from '@apollo/client';

export const QUERY_INSPECTION = gql`
  query inspection($id: ID!) {
    inspection(id: $id) {
      id
      date
    }
  }
`;

export const QUERY_INSPECTIONS = gql`
    { 
        inspections {
            id
            date
        }  
    }
`