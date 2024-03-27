const express = require('express');
// const bodyParser = require('body-parser');
const app = express();


const path = require('path');
const cors = require('cors');
const taskRoute = require('../Server/routes/task.route')
const port = 3000



//  get css
app.use('/style',express.static(path.join(__dirname,'..','Client/style')));
app.use(express.static(path.join(__dirname,'..','Client')));

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use('/task', taskRoute);
// console.log(path.join(__dirname,'..','Client/app.js'));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname,'..' ,'Client/index.html');
    res.sendFile(filePath);
})

require('./config/mongoose.config')

// routes



app.listen(port , ()=> console.log('listening on port', port));