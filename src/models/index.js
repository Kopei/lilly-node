import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 8336
    }
);

const models = {
    cancerType: sequelize.import('./cancerType'),
    cancerStudy: sequelize.import('./cancerStudy')
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export {sequelize}
export default models