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
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            duration: {
                type: Number
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