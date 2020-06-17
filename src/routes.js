const express = require('express')

const routes = express.Router()


routes.get('/projects', (require, response) => {
    return response.json({message: "teste"})
     
 })

 routes.post('projects', (require, response) => {
    return response.json({message: "teste"})
 })

 routes.put('/projects/:id', (require, response) => {
    return response.json(['projeto 1', 'projeto 2', 'projeto 3'])
 })

 routes.delete('/projects/:id', (require, response) => {
    return response.json(['projeto 1', 'projeto 2', 'projeto 3'])
 })
module.exports = routes