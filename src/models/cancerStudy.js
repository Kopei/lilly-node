const cancerStudy = (sequelize, DataTypes) => {
    const cancerStudy = sequelize.define('cancerStudy', {
        cancerStudyIdentifier: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "A cancerStudy has to a cancer study identifier"
                }
            },
        },
        name: {
            type: DataTypes.STRING(255),
        },
        shortName: {
            type: DataTypes.CHAR,
        },
        description: {
            type: DataTypes.STRING(1024)
        },
        public: {
            type: DataTypes.TINYINT,
        },
        pmid: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        citation: {
            type: DataTypes.STRING
        },
        groups: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.INTEGER,
        },
        importData: {
            type: DataTypes.DATE
        },
    },{
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    cancerStudy.associate = models => {
        cancerStudy.belongsTo(models.cancerType)
    };
    return cancerStudy;
};

export default cancerStudy;
