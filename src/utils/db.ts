// import { Sequelize } from 'sequelize';
// import dotenv from 'dotenv';
//
// dotenv.config();

// export const sequelize = new Sequelize(`${process.env.DATABASE_URL}`, {
//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: true,
//     },
//   },
//   dialectModule: require('mysql2'),
// });

// eslint-disable-next-line max-len
// export const sequelize = new Sequelize('tpxzezco', 'tpxzezco', 'R8NkDoAi0WlcWpL9TadlGat-CSkZjR7f', {
//   host: 'mel.db.elephantsql.com',
//   dialect: 'postgres',
// });

// eslint-disable-next-line max-len
// export const sequelize = new Sequelize('grandins_advodessa', 'grandins_advodessa', 'U4F(2ny3#x', {
//   host: 'grandins.mysql.tools',
//   dialect: 'mysql',
// });

import { Sequelize } from 'sequelize';

// export const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
// eslint-disable-next-line max-len
export const sequelize = new Sequelize(
  'grandins_gryffindor',
  'grandins_gryffindor',
  'n4~5Bm_cB3',
  {
    host: 'grandins.mysql.tools',
    dialect: 'mysql',
    dialectModule: require('mysql2'),
  },
);
