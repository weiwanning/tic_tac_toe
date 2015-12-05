var express     = require('express');
var router      = express.Router();
var home        = require('./routers/home.js');
var tic_tac_toe = require('./routers/tic_tac_toe.js');

router.get('/', home);
router.use('/tic_tac_toe', tic_tac_toe);

router.all('*', function(req, resp){
  resp.status(404).json({message: "Oops...Not Found"});
})

module.exports = router;
