var express = require('express');
var router = express.Router();
let x= Math.random()*100;
/* GET users listing. */
router.get('/', function(req, res, next) {
  let y = Math.atanh(x);
  
  res.send(`atanh of ${x} is ${y}`);
});

module.exports = router;
