const express = require('express')
const path = require('path')
const cors = require('cors')


const app = express()

app.use(cors())
app.use('/', require("./routes"))

app.listen('3335',() => {
    console.log("back-end started")
})

