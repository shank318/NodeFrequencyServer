var express = require('express');
var app = express();
var bodyParser = require('body-parser');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.post('/api/record', function(req, res) {


    console.log(req.param('fre'));
});


app.get('/api/status', function(req, res) {

    res.send("Howdy!  Server IS RUNNING");

});


app.listen('1337', function() {
    console.log('Express server listening on port ' + '1337');

});




module.exports = app;