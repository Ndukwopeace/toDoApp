const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Tasks" , {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(res => console.log("connection successfully established"))
.catch(err => console.log("Something went wrong" , err));