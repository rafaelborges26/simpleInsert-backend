const express = require('express')
const routes = express.Router()
const {uuid, isUuid} = require('uuidv4') //cria um id unico

routes.use(express.json())

const projects = []

function logRequest(request, response, next) {
  const { method, url } = request 
  const logLabel = `method: ${method} url: ${url}`
  console.log(logLabel)

  return next() //com o next a gente tem um retorno, sem ele tem a interrupção da requisição (prox middeware)

}

function validadeProjectId(request, response, next) {
  const { id } = request.params
  if(!isUuid(id)) { //se nao for valida o Id
    return response.status(400).json({error:"id is not valid"})
  }

  return next() //caso seja valido chama a request

}

routes.use(logRequest)

routes.use('/projects/:id',validadeProjectId) //para essas rotas aplicar esse middlare

routes.get('/projects', logRequest, (request, response) => {
  const { title } = request.query

  const resoluts = title   //se tem algo na var title
  ? projects.filter(project => project.title.includes(title))  //se tiver pegamos   
  : projects //se n tiver queue params mostramos td
  
    return response.json({resoluts})
})  
  

 routes.post('/projects', (request, response) => {
  const { title, owner } = request.body

  const project = {id: uuid(), title, owner} //id unico
  projects.push(project)
  //console.log(project)
  return response.json(project)
 })

 routes.put('/projects/:id', (request, response) => {
   const { id } = request.params //pegando da url
  const { title, owner } = request.body //pegando do corpo em json

  const idFinded = projects.findIndex(project => project.id == id )// pega o positivo

  const project = {
    id,
    title,
    owner
  } 

  projects[idFinded] = project

  return response.json(project)
 })

 routes.delete('/projects/:id', (request, response) => {
  const { id } = request.params
  const { title, owner } = request.body
  
  const idprofectFounded = projects.findIndex(project => project.id == id )

  if(idprofectFounded < 0) {

    return response.status("400").json({error: "id not founded"})

  }


  projects.splice(projects[idprofectFounded], 1)
  
  return response.status(204).json({message: "vazio"})//status de vazio
 })
module.exports = routes