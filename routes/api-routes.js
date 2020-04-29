// Requiring our models and passport as we've configured it
var db = require("../models");
const router = require("express").Router();

  router.post("/api/workouts", function(req, res) {
    db.Workout.create({})
			.then((data) => res.json(data))
			.catch(function (err) {
				res.status(401).json(err);
			})
  });

 
  router.put("/api/workouts/:id", function({params, body}, res) {
    db.Workout.findByIdAndUpdate(params.id, { $push: {exercises: body} })
			.then((data) => {
				res.json(data);
			})
			.catch(function (err) {
				res.status(401).json(err);
			});
  });


  router.get("/api/workouts", function(req, res) {
    db.Workout.find()
			.then((data) => {
				res.json(data);
			})
			.catch(function (err) {
				res.status(401).json(err);
      })
      
  });

  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(data => {
      res.json(data)
    })
  });

  module.exports = router;
