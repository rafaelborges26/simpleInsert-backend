const express = require('express')

const routes = express.Router()


routes.get('/projects', (require, response) => {
    return response.json({message: "teste"})
     
 })

 routes.post('/projects', (require, response) => {
   return response.json({message: "teste"})
 })

 routes.put('/projects/:id', (require, response) => {
   return response.json({message: "teste"})
 })

 routes.delete('/projects/:id', (require, response) => {
   return response.json({message: "teste"})
 })
module.exports = routes