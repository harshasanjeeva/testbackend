var express = require('express');

var app = module.exports = express.Router();

var Todo = require('./todo');

app.get('/todos', function(req, res){
 Todo.find({}, function(err, todos){
     if(err){
         return res.json({"success":false, "msg":"Error", "error":err});
     }
     res.status(200).send({"success":true, "result":todos})
 });   

});

app.post('/todos', function(req, res){

        if(!req.body.text){
            return res.status(400).send({"success":false, "msg":"Error", "error":err});
        }

        var newTodo = new Todo({
            text: req.body.text
        });

        newTodo.save(function(err){
            if (err){
                console.log("error",err);
                return res.json({"success":false, "msg":"Error", "error":err});
            }
            res.status(201).send({"success":true, "msg":'Succesfully created new TODO'});
        });
           
   
   });