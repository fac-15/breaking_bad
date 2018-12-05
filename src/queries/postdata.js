const dbConnection = require("../database/db_connection");
const postData = name => {
  dbConnection.query(
    "INSERT INTO people (name) VALUES ($1)",
    [name],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postData;
