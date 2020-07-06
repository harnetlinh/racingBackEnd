const express = require('express')

const path = require('path')

const bodyParser = require('body-parser')

const cors = require('cors')

const app = express()

const corsList = {
    origin: "localhost:8080"
}

app.use(cors(corsList))




