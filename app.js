const express    =      require('express');
const bodyParser =      require('body-parser');
const expHand    =      require('express-handlebars');
const mongoose   =      require('mongoose');
const request    =      require('request');

const app = express();

var urls = ["https://www.google.com", "https://www.yahoo.com", "https://www.zsediqyar.com"];


//setup
app.engine('handlebars', expHand({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

function zaki() {
    alert("noooo");
}


var result;

function zaki() {
    request('https://www.google.com', function(error, response, body) {

        result = response.statusCode;

        if(!error && response.statusCode == 200) {
            document.write("The Site Is Up");
            console.log(result);
        } else {
            console.log("code red");
        }
    });
}


// app.get("/", function (req, res, next) {
//     let requestResult = zaki();
//     console.log(requestResult);
//     res.render("index", {status: requestResult});
// });



app.use(function (req, res) {
    request("https://www.zsediqyar.com", function(error, response, body) {
        if(!error && response.statusCode == 200) {
            res.render("index", {status: "up"});
        } else {
            res.render("index", {status: "down"})
        }
    })
});




app.listen(3000, function() {
    console.log('===========================');
    console.log('Starting the Monitoring App');
    console.log('===========================');
});