const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser") // simplifies access to request body
let fs=require('fs')
//const port=process.env.PORT||8081
const app = express()  // make express app
const http = require('http').Server(app)  // inject app into the server

// ADD THESE COMMENTS AND IMPLEMENTATION HERE 
// 1 set up the view engine
// 2 manage our entries
// 3 set up the logger
// 4 handle valid GET requests
// 5 handle valid POST request (not required to fully work)
// 6 respond with 404 if a bad URI is requested

// Listen for an application request on port 8081
// http.listen(8081, function () {
//   console.log('app listening on http://127.0.0.1:8081/')
// })

app.set("views", path.resolve(__dirname, "views")) // path to views
app.set("view engine", "ejs") // specify our view

// 2 include public assets and use bodyParser
// Node uses __dirname for the The directory name of the current module.
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3 log requests to stdout and also
// log HTTP requests to a file using the standard Apache combined format
// see https://github.com/expressjs/morgan for more
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));

app.get("/", function (req, res) {
    //res.sendFile(path.join(__dirname + '/assets/index.html'))
    res.render("index.ejs")
   })
   
   // 4 http GET /tic-tac-toe
   app.get("/website", function (req, res) {
    res.render("website.ejs")
   })
   
   // 4 http GET /about
   app.get("/table", function (req, res) {
    res.render("table.ejs")
   })
   
   // 4 http GET /contact
   app.get("/contact", function (req, res) {
    res.render("contact.ejs")
   })
   
   app.post("/contact", function (req, res) {
     var api_key='c4b180b5b509af6011b636c6409cfccd-4836d8f5-eba85ef4';
     var domain='sandboxbfc5ba84680a45b58cf833b79421bb9a.mailgun.org';
     var mailgun=require('mailgun-js')({apiKey:api_key,domain:domain});
    const firstName = req.body.firstname;
    const middleName = req.body.middlename;
    const lastName = req.body.lastname;
    const Email = req.body.email;
    const mobile = req.body.mobileNumber;
    const isError = true;
   
    // setup e-mail data with unicode symbols
    var data = {
      from: 'Excited User <postmaster@sandboxbfc5ba84680a45b58cf833b79421bb9a.mailgun.org>', // sender address
      to: 'peddinti1995suresh@gmail.com', // list of receivers
      subject: 'questions', // Subject line
      text: firstName,middleName,lastName,Email,mobile,
      err: isError
    }
    mailgun.messages().send(data,function(error,body){
      console.log(body);
      if(!error)
      res.send('your records has been stored')
      else{
        res.send('GoodBye')
      }
    });
   
    // logs to the terminal window (not the browser)
    //console.log('\nCONTACT FORM DATA: ' + name + ' ' + email + ' ' + comment + '\n');
    })
   
    app.get(function (req, res) {
        res.render("404")
       })
       
       // Listen for an application request on designated port
       http.listen(process.env.PORT||8081, function () {
        console.log('app listening on http://127.0.0.1:8081/')
       })
       
       