const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const dotenv = require('dotenv').config();
const bodyParser = require("body-parser");

const routes = require("./Routes/routes.js");
const routerCart = require("./Routes/cartRoutes.js")
const routerAuthSWT = require("./Routes/auth.jwt.routes")
const routerBrand = require("./Routes/brand.routes.js")
const logStore = require('./middleware/logStore/log');

const corsList = {
    origin: "http://localhost:8080"
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsList));
app.use(logStore)
//app.use(dotenv);
app.use("/",routerAuthSWT);
app.use("/",routes);
app.use("/",routerCart);
app.use("/",routerBrand);

app.listen(3000, function log() {
    console.log("Server Is Runing, Port 3000");
})






