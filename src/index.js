import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import schema from './schema'
import resolvers from './resolvers'
import models, {sequelize} from './models'
import {ApolloServer, AuthenticationError} from "apollo-server-express";
import jwt from 'jsonwebtoken'


const app = express();
app.use(cors());


const getMe = async req => {
    const token = req.headers['x-token'];
    if (token) {
        try {
            return await jwt.verify(token, process.env.SECRET);
        } catch (e) {
            throw new AuthenticationError('Your session expired. Sign in again')
        }
    }
};

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    formatError: error => {
        const message = error.message.replace('SequelizeValidationError:', '').replace('Validation error:', '')
        return {
            ...error,
            message
        }
    },
    context: async () => {
        // const me = await getMe(req);
        return {
            secret: process.env.SECRET,
            models,
        }
    }
});



server.applyMiddleware({app, path: '/graphql'});

sequelize.sync().then(async () => {
    app.listen({port: 8888}, () => {
        console.log('Apollo Server on http://localhost:8888/graphql');
    });
});
// sequelize.sync();
