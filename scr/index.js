const express = require('express');
const cors = require('cors');
const path = require('path');
var port = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname,'public')));

app.listen(port);
console.log('server on port '+ port);