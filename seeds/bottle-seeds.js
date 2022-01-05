const { Bottle } = require('../models')


const bottleData = [
    {
        producer_name: 'Chateau Latour',
        vintage: 1961,
        region: 'Bordeaux',
        tasting_notes: 'Old band-aid and pencil shavings. 100 points.',
        wine_type: 'Red Wine',
        cellar_location: 'B01',
        stock: 12,
        category_id: 31,
        user_id: 1,
        reviews: '99 Points Wine Advocate',
        wine_name: 'Grand Vin'

    },
    {
        producer_name: 'Chateau Latour',
        vintage: 1982,
        region: 'Bordeaux',
        tasting_notes: 'Black currants, cedar box, and dried herbs.',
        wine_type: 'Red Wine',
        cellar_location: 'B01',
        stock: 17,
        category_id: 31,
        user_id: 1,
        reviews: '100 Points Wine Advocate',
        wine_name: 'Grand Vin'
    },
    {
        producer_name: 'Chateau Latour',
        vintage: 2000,
        region: 'Bordeaux',
        tasting_notes: 'Blackberry, toasted vanilla, and forest floor.',
        wine_type: 'Red Wine',
        cellar_location: 'B01',
        stock: 24,
        category_id: 31,
        user_id: 1,
        reviews: '100 Points Wine Spectator',
        wine_name: 'Grand Vin'
    },
    {
        producer_name: 'Sine Qua Non',
        vintage: 2015,
        region: 'Santa Barbara County',
        tasting_notes: 'Grilled meats, wood smoke, truffle, and minerals.',
        wine_type: 'Red Wine',
        cellar_location: 'A11',
        stock: 6,
        category_id: 32,
        user_id: 1,
        reviews: '100 Points Wine Advocate',
        wine_name: 'Eleven Confessions'
    },
    {
        producer_name: 'Dom Perignon',
        vintage: 2012,
        region: 'Champagne',
        tasting_notes: 'Pears, green apples, brioche, cream and a hint of honey.',
        wine_type: 'Sparkling Wine',
        cellar_location: 'C09',
        stock: 11,
        category_id: 30,
        user_id: 1,
        reviews: '96 Points Wine Spectator',
        wine_name: 'Brut'
    },
    {
        producer_name: 'Hanzell',
        vintage: 2015,
        region: 'Sonoma Valley',
        tasting_notes: 'Pineapple, apple pie, and nectarine.',
        wine_type: 'White Wine',
        cellar_location: 'D05',
        stock: 9,
        category_id: 9,
        user_id: 1,
        reviews: '100 Points Wine Advocate',
        wine_name: 'Chardonnay'
    },
    {
        producer_name: `Dow's`,
        vintage: 1994,
        region: 'Port',
        tasting_notes: 'Raspberries, raisins, prunes, flowers, and nutmeg',
        wine_type: 'Dessert Wine',
        cellar_location: 'C02',
        stock: 9,
        category_id: 35,
        user_id: 1,
        reviews: '97 Points Wine Spectator',
        wine_name: 'Grand Vin'
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