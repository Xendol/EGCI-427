var express = require('express')
var app = express()


app.get('/showForm',function(req,res){
    res.sendFile(__dirname+"/"+"showForm.html")
})

app.get('/showData',function(req,res){
    data= {
        fname: req.query.fname,
        lname: req.query.lname
    }
    console.log(data)

    res.end(JSON.stringify(data))
})

app.listen(8081)