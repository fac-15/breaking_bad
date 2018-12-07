const dbConnection = require("../database/db_connection");
const postData = (fname, lname, org, pay) => {
  dbConnection.query(
    "INSERT INTO people (first_name, last_name, organisation) VALUES ($1, $2, $3) RETURNING id",
    [fname, lname, org],
    (err, peopleRes) => {
      if (err) return err;
      dbConnection.query(
        "INSERT INTO bookings (lunch_id, people_id, paid) VALUES ($1, $2, $3)",
        [1, peopleRes.rows[0].id, pay],
        err => {
          console.log("am i working");
          if (err) return err;
        }
      );
    }
  );
};

//   dbConnection.query(
//     "INSERT INTO bookings (paid) VALUES ($1)",
//     [pay],
//     (err, res) => {
//       if (err) return cb(err);
//       cb(null, res);
//     }
//   );
// };

module.exports = postData;
