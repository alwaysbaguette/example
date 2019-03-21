const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uploads = require('./routes/upload');


app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/upload',uploads); //미들웨어 등록

app.listen(4000,()=>{
    console.log('listen')
})