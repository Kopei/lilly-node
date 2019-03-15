import 'dotenv/config';
import models, {sequelize} from './models'

const createCancerTypeWithStudies = async () => {
    await models.cancerType.create(
        {
            name: 'Head and Neck Squamous Cell Carcinoma',
            clinicalTrailKeywords: 'head and neck squamous cell carcinoma',
            dedicatedColor: 'Darkred',
            shortName: 'HNSC',
            parent: 'head_neck',
            cancerStudies: [
                {
                    cancerStudyIdentifier: 'hnsc_mdanderson_2013',
                    name: 'Oral Squamous Cell Carcinoma (MD Anderson, Cancer Discov 2013)',
                    shortName: 'Head & neck (MDA)',
                    description: 'Comprehensive profiling of 40 oral squamous cell carcinoma samples from MD Anderson.',
                    public: 1,
                    pmid: 236191268,
                    citation: 'Pickering et al. Cancer Discov 2013',
                    status: 0,
                }
            ]
        },
        {
            include: [models.cancerStudy]
        }
    );
    await models.cancerType.create(
        {
            name: 'Bladder Urothelial Carcinoma',
            clinicalTrailKeywords: 'bladder urothelial carcinoma',
            dedicatedColor: 'Yellow',
            shortName: 'BLCA',
            parent: 'bladder',
            cancerStudies: [
                {
                    cancerStudyIdentifier: 'blca_plasmacytoid_mskcc_2016',
                    name: 'Bladder Cancer, Plasmacytoid Variant (MSKCC, Nat Genet 2016)',
                    shortName: 'Bladder PV (MSKCC)',
                    description: 'Genomic profiling of plasmacytoid-variant (signet ring cell) tumors of the bladder, published set',
                    public: 1,
                    pmid: 26901067,
                    citation: 'Al-Ahmadie et al. Nat Genet 2016',
                    groups: 'PUBLIC',
                    status: 0,
                }
            ]
        },
        {
            include: [models.cancerStudy]
        }
    );

};

sequelize.sync().then(async () => {
    createCancerTypeWithStudies();
});
