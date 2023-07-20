const router = require('express').Router();

router.get('/', function (req, res,next){
  return res.send('hola desde challenge controller');
}); 

module.exports = router;