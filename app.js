const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('*', (req, res) => res.status(404).json("No such url or api or whatever ┐( ͡° ʖ̯ ͡°)┌"));

const http = require('http').createServer(app);

const port = process.env.PORT;

http.listen(port, () => {
    console.log(port);
});
