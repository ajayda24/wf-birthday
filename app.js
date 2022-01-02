const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));


const wfBirthday = require('./routes/wf-birthday');
const wfWedding = require('./routes/wf-wedding');

app.use('/wf-birthday',wfBirthday);
app.use('/wf-wedding',wfWedding);

app.get('/',function(req,res){
  res.render("home",{
    nav: "AJ Daniel",
    link:"https://ajdaniel.gq"
  });
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, function() {
    console.log("Server has started successfully");
  });

module.exports = app