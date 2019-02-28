const express    =      require('express');
const bodyParser =      require('body-parser');
const mongoose   =      require('mongoose');
const request    =      require('request');

const app = express();


//setup
app.engine('handlebars', expHand({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



app.get('/', function(req, res) {
    res.send("hello world");
});










app.listen(3000, function() {
    console.log('===========================');
    console.log('Starting the Monitoring App');
    console.log('===========================');
});