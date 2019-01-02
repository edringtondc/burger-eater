var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    // res.send("Hello");
    burgers.all(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });

});

router.post("/api/burgers", function(req, res) {
  var vals = req.body.burger_name

  burgers.insertOne(vals, function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });

});

router.put("/api/burgers/:id", function(req, res) {

  var id = req.params.id;

  console.log("id", id);

  burgers.update(id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });


  
});

router.delete("/api/burgers/:id", function(req, res) {
  var id = req.params.id;
  burgers.delete('burgers', id, function(data){
    console.log(data);
    if (data.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
   
  
  });
});

// Export routes for server.js to use.
module.exports = router;
