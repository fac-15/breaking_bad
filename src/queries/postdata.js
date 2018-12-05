const dbConnection = require("../database/db_connection");
const postData = (fname, lname) => {
  dbConnection.query(
    "INSERT INTO people (first_name, last_name) VALUES ($1, $2)",
    [fname, lname],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postData;
