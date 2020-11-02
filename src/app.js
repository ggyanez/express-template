global.satellitesData = {
    kenobiDistance: undefined,
    skywalkerDistance: undefined,
    satoDistance: undefined,
    kenobiMessage: undefined,
    skywalkerMessage: undefined,
    satoMessage: undefined
}

const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes/resource.route')); 
app.use(function (req, res, next) {
    response = {
        Error: 'URL not found'
    };
    res.status(404).send(response);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(process.env.PORT ? `Server is running on port ${process.env.PORT}` : `Server is running on port 3000`);
});