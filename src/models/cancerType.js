const cancerType = (sequelize, DataTypes) => {
    const cancerType = sequelize.define('cancerType', {
        name: {
            type: DataTypes.STRING(255),
            validate: {
                notEmpty: {
                    args: true,
                    msg: "A cancerType has to a name"
                }
            },
        },
        clinicalTrailKeywords: {
            type: DataTypes.STRING(1024),
        },
        dedicatedColor: {
            type: DataTypes.CHAR,
        },
        shortName: {
            type: DataTypes.STRING
        },
        parent: {
            type: DataTypes.STRING
        }
    },{
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    cancerType.associate = models => {
        cancerType.hasMany(models.cancerStudy, {onDelete: "CASCADE"});
    };
    return cancerType;
};

export default cancerType;