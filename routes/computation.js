var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let x= Math.random() *100;
  let y = Math.cbrt(x);
  
  res.send(`cbrt of ${x} is ${y}`);
});

module.exports = router;
