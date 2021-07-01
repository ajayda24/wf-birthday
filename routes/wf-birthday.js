const express = require("express");

const router = express.Router();

var bd = require("../birthday-details");

var month = new Array();
  month[0] = "jan";
  month[1] = "feb";
  month[2] = "mar";
  month[3] = "apr";
  month[4] = "may";
  month[5] = "jun";
  month[6] = "july";
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

//   var upcomingOne = (Number(d) + 1).toString();
//   var upcomingTwo = (Number(d) + 2).toString();
//   var upcomingThree = (Number(d) + 3).toString()
//   var upcomingFour = (Number(d) + 4).toString()
//   var upcomingFive = (Number(d) + 5).toString()
//   var upcomingSix = (Number(d) + 6).toString()
//   var upcomingSeven = (Number(d) + 7).toString()

//   var uMd1 = m + upcomingOne 
//   var uMd2 = m + upcomingTwo 
//   var uMd3 = m + upcomingThree
//   var uMd4 = m + upcomingFour 
//   var uMd5 = m + upcomingFive 
//   var uMd6 = m + upcomingSix
//   var uMd7 = m + upcomingSeven

//   var uBday1 = bd[uMd1][0].name
//   var uBday2 = bd[uMd2][0].name
//   var uBday3 = bd[uMd3][0].name
//   var uBday4 = bd[uMd4][0].name
//   var uBday5 = bd[uMd5][0].name
//   var uBday6 = bd[uMd6][0].name
//   var uBday7 = bd[uMd7][0].name

//   var upcoming = [];
// upcoming.push(
//   ...uBday1,
//   ...uBday2,
//   ...uBday3,
//   ...uBday4,
//   ...uBday5,
//   ...uBday6,
//   ...uBday7
// )

// console.log(uBday1)
//   var currentMonth = m.toUpperCase();

  


router.get("/", function (req, res) {
    res.render('birthday', {
      bd: bday,
      nav: 'WF Birthday',
      link: '/wf-birthday',
    })

});

router.get("/wf/:wfId", function(req, res){

    const requestedWfId = req.params.wfId;
    const id = requestedWfId;
    
    
    res.render("../views/single-birthday", {
        id: id,
        name: bday[0].name[id],
        place: bday[0].place[id],
        nav:"WF Birthday",
        link:"/wf-birthday"

    });
});

module.exports = router;