import {gql} from 'apollo-server-express';

export default gql`
    extend type Query {
        cancerTypes: [Cancer!]
        cancerType(shortName: String!): Cancer
    }
    
    type Cancer{
        id: ID!
        name: String!
        clinicalTypeKeywords: String
        shortName: String!
        parent: String!
        studies: [Study]!
    }
    `;