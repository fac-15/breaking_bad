const dbConnection = require("../database/db_connections");
const getData = cb => {
  dbConnection.query("SELECT * FROM people", (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};

module.exports = getData;
