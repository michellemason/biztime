/** Database setup for users. */

const { Client } = require("pg");
/** could do const pg = require("pg"); 
 * and then reference pg.Client everywhere */

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///biztime_test";
} else {
  DB_URI = "postgresql:///biztime";
}

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;