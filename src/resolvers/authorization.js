import {ForbiddenError} from 'apollo-server';
import {skip, combineResolvers} from 'graphql-resolvers'

export const isAuthenticated = (parent, args, {me}) => me ? skip : new ForbiddenError('Not authenticated!');


export const isMessageOwner = async (parent, {id}, {models, me}) => {
    const message = await models.Message.findById(id, {raw: true});
    if (me.id !== message.userId) {
        throw new ForbiddenError('Not authenticated as owner')
    }
    return skip
};

export const isAdmin = combineResolvers(
    isAuthenticated,
    (parent, args, {me: {role}}) =>
        role === 'ADMIN'
            ? skip : new ForbiddenError("not authorized as admin")
);
