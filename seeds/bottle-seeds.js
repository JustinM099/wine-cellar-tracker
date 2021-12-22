const { Bottle } = require('../models')


const bottleData = [
    {
        producer_name: 'Chateau Latour',
        vintage: 1961,
        region: 'Bordeaux',
        tasting_notes: 'Old band-aid and pencil shavings. 100 points.',
        style: 'red',
        cellar_location: 'B01',
        quantity: 12,
        category_id: 1

    },

]

const seedBottles = () => Bottle.bulkCreate(bottleData);

module.exports = seedBottles;
 



// Bottle.init(
//     {
//       // define columns
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//       },
//       producer_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       vintage: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       region: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       name: {
//         type: DataTypes.STRING,
//       },
//       region: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       tasting_notes: {
//         type: DataTypes.STRING,
//       },
//       cellar_location: {
//         type: DataTypes.STRING,
//       },
//       quantity: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       category_id: {
//         type: DataTypes.INTEGER,
//         //references the Category model's ID
//         references: {
//           model: 'category',
//           key: 'id',
//         }
//       }
      
        
//     },
//     {
//       sequelize,
//       timestamps: false,
//       freezeTableName: true,
//       underscored: true,
//       modelName: 'product',
//     }
//   );