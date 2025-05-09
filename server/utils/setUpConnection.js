import { createConnection } from "mysql";

export const setUpConnection = () => {
  return createConnection({
    host: "localhost",
    user: "root",
    password: "test123",
    database: "sys",
    port: "3306",
  });
};