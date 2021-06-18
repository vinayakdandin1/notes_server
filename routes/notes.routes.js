const express = require('express')
const router = express.Router()

let NotesModel = require('../models/Notes.model')

// NOTE: All your API routes will start from /api 

// will handle all GET requests to http:localhost:5005/api/todos
router.get('/notes', (req, res) => {
    NotesModel.find()
      .then((todos) => {
            res.status(200).json(todos)
      })
      .catch((err) => {
            res.status(500).json({
                error: 'Something went wrong',
                message: err
            })
      })         
})

// will handle all POST requests to http:localhost:5005/api/create

router.post('/create', (req, res) => {  
    const {name, description, completed} = req.body;
   
    NotesModel.create({name: name, description: description, completed: completed})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

// will handle all GET requests to http:localhost:5005/api/todos/:todoId
//PS: Don't type :noteId , it's something dynamic, 
router.get('/notes/:noteId', (req, res) => {
  NotesModel.findById(req.params.noteId)
     .then((response) => {
          res.status(200).json(response)
     })
     .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     }) 
})

// will handle all DELETE requests to http:localhost:5005/api/todos/:id
router.delete('/notes/:id', (req, res) => {
  NotesModel.findByIdAndDelete(req.params.id)
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

// will handle all PATCH requests to http:localhost:5005/api/todos/:id
router.patch('/notes/:id', (req, res) => {
    let id = req.params.id
    const {name, description, completed} = req.body;
    NotesModel.findByIdAndUpdate(id, {$set: {name: name, description: description, completed: completed}}, {new: true})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               console.log(err)
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          }) 
})

module.exports = router;