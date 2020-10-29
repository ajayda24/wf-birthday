const express = require("express");

const router = express.Router();

var bd = require("../wa-details");

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

router.get("/",function(req,res){

    res.render("../views/wedding",{
        bd:bday,
        nav:"Wedding Anniversary",
        link:"/wf-wedding"
    })

});

router.get("/wf/:wfId", function(req, res){

    const requestedWfId = req.params.wfId;
    const id = requestedWfId;
    
    res.render("../views/single-wedding", {
        id: id,
        name: bday[0].name[id],
        image: bday[0].image[id],
        nav:"Wedding Anniversary",
        link:"/wf-wedding"

    });
    console.log(id);
});

module.exports = router;