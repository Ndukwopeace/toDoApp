const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type : String,
        required: [true, "add a Task"],
        min:  [3 , "should be atleast 3 characters long"]
    },
    completed : {
        type : Boolean,
        default: false
    }

},{timestamps: true})

   module.exports = mongoose.model('Task', taskSchema);

