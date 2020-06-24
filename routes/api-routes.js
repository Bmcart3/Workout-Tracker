const db = require("../models");
const { Workout } = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(Workout => {
                res.json(Workout);
            })
            .catch(err => {
                res.json(err);
              });
    });
    
    app.get("/api/exercise", (req, res) => {
      db.Workout.find({})
      .then(Workout => {
          res.json(Workout);
      })
      .catch(err => {
          res.json(err);
        });
    });
    
    app.post("/api/workouts", (req,res) => {
      const workout = new Workout(req.body)
      db.Workout.create(workout)
        .then(Workout => {
          res.json(Workout);
        })
        .catch(err => {
          res.json(err);
        });
    });
};