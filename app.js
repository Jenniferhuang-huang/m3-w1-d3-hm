var express = require('express');
var path = require('path');
var app = express();
const routes = require("./route");

app.get('/components', function(req,res){
    res.render('CONTENT');
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use("/", routes);
app.listen(3000);

module.exports = app;
