const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const todos = require('./routes/todos');

const app = express();

// POSTでdataを受け取る設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use('/todo', todos);

// サーバ起動
app.listen(3000);
console.log('listen on port' +  port);