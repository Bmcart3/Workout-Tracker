const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    day: {
        type: Date 
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise type required."
            },
            name: {
                type: String,
                trim: true,
                required: "Name required."
            },
            duration: {
                type: Number,
                required: "Exercise duration required."
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]
});


// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", UserSchema);

// Export the Workout model
module.exports = Workout;