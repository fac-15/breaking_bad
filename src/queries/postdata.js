const dbConnection = require("../database/db_connection");
const postData = (fname, lname, org, pay, cb) => {
  dbConnection.query(
    "INSERT INTO people (first_name, last_name, organisation) VALUES ($1, $2, $3)",
    [fname, lname, org],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );

  dbConnection.query(
    "INSERT INTO bookings (paid) VALUES ($1)",
    [pay],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postData;
