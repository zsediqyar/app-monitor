const express    =      require('express');
const bodyParser =      require('body-parser');
const expHand    =      require('express-handlebars');
const mongoose   =      require('mongoose');
const methodOverride =  require('method-override');
const cron       =      require('node-cron');
const request    =      require('request');
const Sites      =      require('./models/sitesSchema'); //DB SCHEMA 
const router     =      require('./routes');


const app = express();

//MONGO DB CONNECTION
mongoose.connect('mongodb://localhost:27017/sites_db');



//MONGO DB MODEL
const monCon = mongoose.connection.readyState;


//setup
app.engine('handlebars', expHand({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(methodOverride('_method'))
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



//GET THE LOGIN PAGE
app.get("/", function(req, res) {
    res.render("login");
});

//GET H0ME/INDEX PAGE
app.get("/home", function(req, res) {
    res.render("index");
});

//GET ALL SITES PAGE
app.get("/home/allsites", function(req, res) {
    Sites.find()
    .then(function(doc) {
        res.render("allsites", {sites: doc});
    });
});


//GET THE NEW PAGE
app.get("/home/new", function(req, res) {
    res.render("new");
});

//POST TO THE ALL SITES PAGE
app.post("/home/allsites", function(req, res) {
    var siteResponse;
    var siteStatus = request(req.body.url, function(error, response) {
        if(!error && response.statusCode == 200) {
            siteResponse = response.statusCode;
            console.log("grabbed and saved");
        } else {
            console.log(error);
        }
    });

    var sitesData = req.body.sitesInfo;
    var data = new Sites(sitesData);
    data.save();
    res.redirect("/home/allsites");
});


//GET THE SITE INFO PAGE
app.get("/home/allsites/:id", function(req, res) {
    Sites.findById(req.params.id, function(err, showSite) {
        if(err) {
            console.log(err);
            res.redirect("/home/allsites");
        } else {
            res.render("show", {sites: showSite});
        }
    });
});

//GET THE SITE EDIT PAGE
app.get("/home/allsites/:id/edit", function(req, res, next) {
    Sites.findById(req.params.id, function(err, editSite) {
        if(err) {
            console.log(err);
        } else {
            res.render("edit", {sites: editSite});
        }
    });
});

//UPDATE THE SITE EDIT
app.put("/home/allsites/:id", function(req, res) {
    Sites.findByIdAndUpdate(req.params.id, req.body.sitesInfo, function(err, updateSite) {
        if(err) {
            console.log(err);
        } else {
            updateSite.save();
            res.redirect("/home/allsites");
        }
    });
});

//DELETE THE SITE
app.delete("/home/allsites/:id", function(req, res) {
    Sites.findOneAndDelete(req.params.id, function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/home/allsites");
        }
    });
});


app.get("*", function(req, res) {
    res.send("error! no such page exists");
});













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
    console.log(monCon);
});