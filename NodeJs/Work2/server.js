var express = require('express')
var routing=express()
routing.get('/',function(req,res){
    res.send("<h1>Hello World</h1>")
})

routing.get('/profile',function(req,res){
    res.send("<h1>Nearly there</h1>")
})

routing.get('/profile/:name',function(req,res){
    res.send("<h1>Welcome " +req.params.name+"</h1>")
})
routing.listen(8081)    