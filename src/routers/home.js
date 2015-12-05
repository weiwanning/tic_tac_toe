var express = require('express');
var router  = express.Router();

router.get('/', function(req, resp){
  resp.send({message: "tic_tac_toe game home"});
});

module.exports = router;
