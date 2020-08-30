const express = require('express');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');
require('dotenv').config();

const app = express();

const db = require('./database').getInstance();

db.setModels();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileupload({}));

const middlewares = require('./middlewares');

const { usersRouter, authRouter, categoriesRouter, goodsRouter } = require('./router');

app.use('/auth', authRouter);
app.use('/users', middlewares.checkAccessToken, usersRouter);
app.use('/categories', middlewares.checkAccessToken, categoriesRouter);
app.use('/goods', middlewares.checkAccessToken, goodsRouter);

app.all('*', (req, res) => res.status(404).json('No such url or api or whatever ┐( ͡° ʖ̯ ͡°)┌'));

const http = require('http').createServer(app);

const port = process.env.PORT;

http.listen(port, () => console.log(port));
