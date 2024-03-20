var express = require('express');
var router = express.Router();
let x= Math.random()*100;
/* GET users listing. */
router.get('/', function(req, res, next) {
  let y = Math.cbrt(x);
  
  res.send(`cbrt of ${x} is ${y}`);
});

module.exports = router;
