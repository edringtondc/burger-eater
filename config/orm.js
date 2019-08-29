// selectAll()
// insertOne()
// updateOne()

// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(vals, cb) {
    var queryString = `INSERT INTO burgers(burger_name) VALUES ('${vals}')`
    // console.log(queryString);

    connection.query(queryString,function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  create: function(vals, cb) {
    var queryString = `INSERT INTO burgers(burger_name) VALUES ?`
    // console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // An example of objColVals would be {name: vegburger, devoured: true}
  updateOne: function(vals, cb) {
    var queryString = `UPDATE burgers SET devoured = true WHERE id = '${vals}'`;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function(table, id, cb) {
    var queryString = "DELETE FROM ?? WHERE id= ?";

    console.log(queryString);
    connection.query(queryString, [table, id], function(err, result) {
      if (err) {
        throw err;
      }
      
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
