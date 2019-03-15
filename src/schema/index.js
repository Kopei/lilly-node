import {gql} from 'apollo-server-express';

import cancerType from './cancerType';
import cancerStudy from './cancerStudy';

const linkSchema = gql`
    scalar Date
    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }

`;

export default [linkSchema, cancerType, cancerStudy];