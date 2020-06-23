const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");
const { Workout } = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

//Morgan should be the first app.use.
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(Workout => {
            res.json(Workout);
        })
        .catch(err => {
            res.json(err);
          });
});

app.get("/exercise", (req, res) => {
        res.render("exercise"); 
});

// Workout.find({}, (err, data) => {
//     if (err) {
//         res.status(500).json(err);
//       } else {
//         res.render("exercise");
//       }})


//Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });