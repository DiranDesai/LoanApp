import { Sequelize } from "sequelize";

// const sequelize = new Sequelize('loanDatabase', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

const sequelize = new Sequelize('sql5788856', 'sql5788856', 'XgCkflNAen', {
  host: 'sql5.freesqldatabase.com',
  port: 3306,
  dialect: 'mysql',
  logging: false, // Optional: set to true to see SQL queries in the console
});

export default sequelize;

