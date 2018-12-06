BEGIN;

DROP TABLE IF EXISTS people, lunch, bookings;

CREATE TABLE IF NOT EXISTS people (
  id    SERIAL   PRIMARY KEY,
  first_name   TEXT     NOT NULL,
  last_name    TEXT     NOT NULL,
  organisation TEXT,
  student BOOLEAN
);

CREATE TABLE IF NOT EXISTS lunch (
  id   SERIAL   PRIMARY KEY,
  cuisine    TEXT     NOT NULL,
  dates      DATE
);

CREATE TABLE IF NOT EXISTS bookings (
  id   SERIAL   PRIMARY KEY,
  lunch_id     INTEGER REFERENCES lunch (id) NOT NULL,
  people_id    INTEGER REFERENCES people (id) NOT NULL,
  paid BOOLEAN
);

INSERT INTO lunch (cuisine, dates) VALUES('Ethopian', to_date('20181212', 'YYYYMMDD'));
INSERT INTO lunch (cuisine, dates) VALUES('Turkish', to_date('20181219', 'YYYYMMDD'));
INSERT INTO lunch (cuisine, dates) VALUES('Lebanese', to_date('20181226', 'YYYYMMDD'));

COMMIT;
