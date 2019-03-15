import {GraphQLDateTime} from "graphql-iso-date/dist/index";
import cancerType from './cancerType'
import cancerStudy from './cancerStudy'

const customScalarResolver = {
    Date: GraphQLDateTime,
};

export default [customScalarResolver, cancerType, cancerStudy]