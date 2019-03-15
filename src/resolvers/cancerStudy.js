import {combinedResolvers} from 'graphql-resolvers'
import {AuthenticattionError, UserInputError} from 'apollo-server'

export default {
    Query: {
        cancerStudy: async (parent, {shortName}, {models}) => {
            return await models.cancerStudy.findByPk(shortName)
        },
        cancerStudies: async (parent, args, {models}) => {
            return await models.cancerStudy.findAll();
        }
    },

    Study: {
        cancerType: async (parent, args, {models}) => {
            return await models.cancerType.findByPk(parent.id)
        }
    }

}