var express = require('express')
var routing=express()
routing.get('/', function(req,res){
    res.send("<h1>Hello World</h1>")
})

routing.get('/user/profile', function(req,res){
    console.log("Request: "+ new Date(), req.method, req.url)
})

routing.get('/profile/:text', function(req, res){
    res.send("<h1>Welcome " +req.params.text+"</h1>")
})
routing.listen(8081)    