const express = require('express')
const path = require('path')


const app = express()

app.use('/', require("./routes"))

app.listen('3335',() => {
    console.log("back-end started")
})

