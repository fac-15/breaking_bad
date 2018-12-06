const fs = require("fs");
const path = require("path");
const dbConnection = require("./db_connection.js");

const sqlPath = path.join(__dirname, "db_build_test.sql");
const sql = fs.readFileSync(sqlPath).toString();

const runDbBuild = cb => {
  dbConnection.query(sql, cb);
};

module.exports = runDbBuild;
