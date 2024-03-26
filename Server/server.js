const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
const taskRoute = require('../Server/routes/task.route')
const port = 7000


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
//  get css
app.use('/style',express.static(path.join(__dirname,'..','Client/style')));

app.use(express.static(path.join(__dirname,'..','Client')));

// console.log(path.join(__dirname,'..','Client/app.js'));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname,'..' ,'Client/index.html');
    res.sendFile(filePath);
})

require('./config/mongoose.config')

// routes

app.use('/task', taskRoute);


app.listen(port , ()=> console.log('listening on port', port));