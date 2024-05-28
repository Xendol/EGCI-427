var express = require('express')
var app = express()
var fs = require('fs') //Read userlist.json

app.get('/insertUser/:name/:pass/:occu/:id', function(req,res){
    fs.readFile(__dirname+"/"+"user.json", 'utf8', function(err,data){
        console.log(data) // user.json data
        data['name:'+req.params.name]
        res.end(JSON.stringify(data, '', 4))
    })
})

    //Add one user(json) to data
   //     var users = JSON.parse(data)
    //    console.log(users) 
    //    res.end(JSON.stringify(users))
    



var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application run at http://%s:%s", host, port)
})
