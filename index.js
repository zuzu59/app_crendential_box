//app_crendential_box
//Petit Helloworld en nodejs pour tester l'Aplication Credential Box en NodeJS
//zf170417.1602
//MIT License
//Copyright (c) 2017 christian@zufferey.com

var express = require('express')
var app = express()
var path = require('path');
var titi = require("./titi.js")
var tutu = require("./tutu.js")
var secrets = require('../app_crendential_box.credentials.js')

//route en dynamique
app.get('/', function(req, res) {
  text = ""
  result = titi.tata(33, 3)
  text = "<p>Hello World! <br> ça marche en remote 170417.1604.<p>"
  text += "<p>Les credentials sont:<br>Username: " + secrets.username + "<br>Password: " + secrets.password + "</p>"

  if (result < 18) {
    text += ('<p>Le résultat est: ' + result + "</p>")
  }

  //  debugger;

  res.send(text)
})

//route sur URL: http://zuzu123-1:3000/copernic/?toto=123&tutu=234
app.get('/copernic', function(req, res) {
  //console.log(res)
  //res.send("ok")
  text = ("<p>" + req.url + "</p>")
  text += "toto: " + req.query.toto + "<br>"
  text += "tutu: " + req.query.tutu + "<br>"
  zval = parseFloat(req.query.toto) + parseFloat(req.query.tutu)
  text += "toto + tutu: " + zval + "<br>"
  res.send(text)
})

//route une fichier HTML statique
app.get('/tata.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/tata.html'));
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})


//ssh -D 3333 ubuntu@zuzu123.node.consul
