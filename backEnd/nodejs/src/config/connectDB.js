const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize("bookinghealth", "postgres", 123456, {
//   host: "localhost",
//   dialect:
//     "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
//   logging: false,
//   dialectOptions: {},
//   query: {
//     raw: true,
//   },
//   timezone: "+07:00",
// });

const sequelize = new Sequelize(
  process.env.DB_DATABASE_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
    dialectOptions:
      process.env.DB_SSL === "true"
        ? {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          }
        : {},
    query: {
      raw: true,
    },
    timezone: "+07:00",
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
