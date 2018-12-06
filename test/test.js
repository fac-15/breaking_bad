const tape = require('tape');
const runDbBuild = require('../src/database/db_build_test');
const getData = require('../src/queries/getdata');
const postData = require('../src/queries/postdata');

tape('tape is working', (t) => {
  t.equals(1, 1, 'one is equal to one');
  t.end();
});
