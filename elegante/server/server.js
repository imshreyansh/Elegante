const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const cors = require('cors');
const morgan = require("morgan");
const { mountRoutes } = require("./routes")


app.use(morgan("dev"));
app.use(function (req, res, next) {
    let origin = req.headers.origin;
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(cors())
// Use above cors before routes are setup
mountRoutes(app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/uploads", express.static("uploads"))


mongoose.connect('mongodb://localhost/elegante',
    { useNewUrlParser: true },{ useFindAndModify: false },{useUnifiedTopology: true }
).then(() =>
    console.log('connected to mongodb'))
    .catch((err) =>
        console.error('could not connect to mongodb', err))

const port = process.env.PORT || 3000

let httpServer;
httpServer = http.createServer(app);
  httpServer.listen(port, () => console.info(`welcome to elegante :)  visit http://localhost:${port}`))
