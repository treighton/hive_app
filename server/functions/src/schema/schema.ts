import {gql} from 'apollo-server-express';

const typeDefs = gql`
  type Inspection {
    id: ID!
    date: String!
    hiveId: Int!
    hiveWeight: String
    workerPopulation: String
    layingPattern: String
    eggsPresent: Boolean
    larvaPresent: Boolean
    cappedBrood: Boolean
    queenPresent: Boolean
    hiveTempermant: String
    honeyStores: String
    pollenStores: String
    odor: String
    hiveBeetles: Boolean
    varroaSymptoms: Boolean
    varroaCount: String
    superAdded: Boolean
    superRemoved: Boolean
    addedExcluder: Boolean
    notes: String
  }

  type Query {
    inspections: [Inspection]
    inspection(id: ID!): Inspection
  }

  input InspectionInput {
    id: ID!
    date: String!
    hiveId: Int!
    hiveWeight: String
    workerPopulation: String
    layingPattern: String
    eggsPresent: Boolean
    larvaPresent: Boolean
    cappedBrood: Boolean
    queenPresent: Boolean
    hiveTempermant: String
    honeyStores: String
    pollenStores: String
    odor: String
    hiveBeetles: Boolean
    varroaSymptoms: Boolean
    varroaCount: String
    superAdded: Boolean
    superRemoved: Boolean
    addedExcluder: Boolean
    notes: String
  }

  type Mutation {
    addInspection(input: InspectionInput): Inspection
  }
`;

export {typeDefs};
