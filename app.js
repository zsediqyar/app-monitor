const express    =      require('express');
const bodyParser =      require('body-parser');
const expHand    =      require('express-handlebars');
const mongoose   =      require('mongoose');
const cron       =      require('node-cron');
const request    =      require('request');


const app = express();



var urlList = ["https://www.google.com", "https://www.yahoo.com", "https://www.zsediqyar.com"];


//setup
app.engine('handlebars', expHand({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


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






// app.get("/", function (req, res) {
//     result = request("https://www.google.com",
//         function(error, response, body) {
//         if(!error && response.statusCode == 200) {
//             res.render("index", {status: "up"});
//         }   else {
//             res.render("index", {status: "down"});
//         }
//     });

//     cron.schedule('* * * * *', function() {
//         console.log("hi from the main route");
//     });
// });



// app.use(function (req, res) {
//     for (var i = 0; i < urls.length; i++);
//     request(urls[i], function(error, response, body) {
//         if(!error && response.statusCode == 200) {
//             res.render("index", {status: "up"});
//         } else {
//             res.render("index", {status: "down"})
//         }
//     })
// });




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