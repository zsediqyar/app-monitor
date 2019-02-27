const express    =      require('express');
const bodyParser =      require('body-parser');
const mongoose   =      require('mongoose');

const app = express();



app.get('/', function(req, res) {
    res.send("hello world");
});










app.listen(3000, function() {
    console.log('===========================');
    console.log('Starting the Monitoring App');
    console.log('===========================');
});