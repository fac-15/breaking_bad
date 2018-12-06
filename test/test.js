const tape = require('tape');
const runDbBuild = require('../src/database/db_build_test');
const getData = require('../src/queries/getdata');
const postData = require('../src/queries/postdata');

tape('tape is working', (t) => {
  t.equals(1, 1, 'one is equal to one');
  t.end();
});

tape('this is a test', (t) => {
  runDbBuild((err, res) => {
    let expected = 'Turkish';
    getData((err, result) => {
      if (err) {
        console.log(err);
      }
      console.log('getData result: ', result);
      t.deepEqual(result[1].cuisine, expected, 'returns true');
      t.end();
    });
  });
});
