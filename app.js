const express    =      require('express');
const bodyParser =      require('body-parser');
const expHand    =      require('express-handlebars');
const mongoose   =      require('mongoose');
const cron       =      require('node-cron');
const request    =      require('request');


const app = express();


var urlList = ["https://www.google.com", "https://www.yahoo.com", "https://www.zsediqyar.com"];


//setup
app.engine('handlebars', expHand({defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));




app.get("/", function(req, res) {
    res.render("login");
});

app.get("/home", function(req, res) {
    res.render("index");
});

app.get("/home/new", function(req, res) {
    res.render("new");
});

app.get("/home/allsites", function(req, res) {
    res.render("allsites");
})






// function zaki() {
//     request('https://www.google.com', function(error, response, body) {

//         result = response.statusCode;

//         if(!error && response.statusCode == 200) {
//             document.write("The Site Is Up");
//             console.log(result);
//         } else {
//             console.log("code red");
//         }
//     });
// }












// function getStatus(url) {
//     return new Promise(function (resolve, reject) {
//       request(url, function (error, response, body) {
//         resolve({
//           site: url,
//           status: !error && response.statusCode == 200 ? "OK" : "Down: " + error.message
//         });
//       });
//     });
//   }
  
//   var promiseList = urlList.map(function (url) {
//     return getStatus(url);
//   });

//   Promise.all(promiseList).then(function (resultList) {
//     resultList.forEach(function (result) {
//       return console.log("Result: ", result);
//     });
//   });



// cron.schedule('* * * * *', function() {
//     getStatus();
// });






app.listen(3000, function() {
    console.log('===========================');
    console.log('Starting the Monitoring App');
    console.log('===========================');
});