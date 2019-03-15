import {combinedResolvers} from 'graphql-resolvers'
import {AuthenticattionError, UserInputError} from 'apollo-server'
import {sequelize} from "../models";

export default {
    Query: {
        cancerType: async (parent, {shortName}, {models}) => {
            return await models.cancerType.findByPk(shortName)
        },
        cancerTypes: async (parent, args, {models}) => {
            return await models.cancerType.findAll();
        }
    },

    Cancer: {
        studies: async (parent, args, {models}) => {
            return await models.cancerStudy.findAll({
                where: {
                    cancerTypeID: parent.id
                }
            })
        }
    }

}
