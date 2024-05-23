var express = require('express')
var app = express()
var fs=require('fs');
var total = [];

app.get('/showForm',function(req,res){
    res.sendFile(__dirname+"/"+"showForm.html")
})

app.post('/showData',function(req,res){
    data= {
        fname: req.query.fname,
        lname: req.query.lname,
        result: parseInt(req.query.a) + parseInt(req.query.b)
    }
    fs.appendFile('output.json', JSON.stringify(data), function(err) {
        if (err) throw err;
    })
    total.push(data)
    console.log(total)
    res.end(JSON.stringify(total))
})


app.listen(8081)



