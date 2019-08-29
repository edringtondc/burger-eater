// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  // The variables cols and vals are arrays.
  insertOne: function(vals, cb) {
    orm.insertOne(vals, function(res) {
      cb(res);
    });
  },

  update: function(vals, cb) {
    orm.updateOne(vals, function(res) {
      cb(res);
    });
  },

  delete: function(table, id, cb){
    orm.delete(table, id, function(res){
      cb(res)
    })
  }

};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;