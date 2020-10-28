const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
var bd = require("./birthday-details");

var month = new Array();
  month[0] = "jan";
  month[1] = "feb";
  month[2] = "mar";
  month[3] = "apr";
  month[4] = "may";
  month[5] = "jun";
  month[6] = "jul";
  month[7] = "aug";
  month[8] = "sep";
  month[9] = "oct";
  month[10] = "nov";
  month[11] = "dec";

  var date = new Date();
  var m = month[date.getMonth()];
  var d = date.getDate().toString();
  var md = m+d;
  var bday = bd[md];

var colour = [
    { bgcolor: '#3366ff', color: '#000'},
    { bgcolor: '#6600cc', color: '#000' },
    { bgcolor: '#006600', color: '#000' },
    { bgcolor: '#604020', color: '#000' },
    { bgcolor: '#ff3300', color: '#000' },
    { bgcolor: '#80dfff', color: '#000' },
    { bgcolor: '#99ff99', color: '#000' },
    { bgcolor: '#000066', color: '#000' },
    { bgcolor: '#990033', color: '#000' },
    { bgcolor: '#3366ff', color: '#000'},
    { bgcolor: '#6600cc', color: '#000' },
    { bgcolor: '#006600', color: '#000' },
    { bgcolor: '#604020', color: '#000' },
    { bgcolor: '#ff3300', color: '#000' },
    { bgcolor: '#80dfff', color: '#000' },
    { bgcolor: '#99ff99', color: '#000' },
    { bgcolor: '#000066', color: '#000' },
    { bgcolor: '#990033', color: '#000' },
    { bgcolor: '#604020', color: '#000' },
    { bgcolor: '#ff3300', color: '#000' },
    { bgcolor: '#80dfff', color: '#000' },
    { bgcolor: '#99ff99', color: '#000' },
    { bgcolor: '#000066', color: '#000' },
    { bgcolor: '#990033', color: '#000' },
    { bgcolor: '#3366ff', color: '#000'},
    { bgcolor: '#6600cc', color: '#000' },
    { bgcolor: '#006600', color: '#000' },
    { bgcolor: '#604020', color: '#000' },
    { bgcolor: '#ff3300', color: '#000' },
];

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));


app.get("/",function(req,res){

    res.render("home",{
        bd:bday,
        colour:colour
    })
    // console.log(bday[0].name[1]);

    // console.log(bday[0].image[1]);

    console.log(bday);

});

app.get("/wf/:wfId", function(req, res){

    const requestedWfId = req.params.wfId;
    const id = requestedWfId;
    
        res.render("singleBd", {
            id: id,
            name: bday[0].name[id],
            image: bday[0].image[id]

        });
    
    
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, function() {
    console.log("Server has started successfully");
  });