import {gql} from 'apollo-server-express';

export default gql`
    extend type Query {
        cancerStudies: [Study!]
        cancerStudy(shortName: String!): Study
    }

    type Study{
        id: ID!
        name: String
        shortName: String!
        description: String
        citation: String
        groups: String
        createdAt: String
        cancerType: Cancer!
    }
`;