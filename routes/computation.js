var express = require('express');
var router = express.Router();
let x= Math.random()*100;
/* GET users listing. */
router.get('/', function(req, res, next) {
  let y = Math.atan2(x);
  
  res.send(`atan2 of ${x} is ${y}`);
});

module.exports = router;
