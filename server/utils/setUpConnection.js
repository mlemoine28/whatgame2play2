const { createConnection } = require("mysql");

const setUpConnection = () => {
  return createConnection({
    host: "localhost",
    user: "root",
    password: "test123",
    database: "sys",
    port: "3306",
  });
};

module.exports = setUpConnection;