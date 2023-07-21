const router = require('express').Router();
const challengeController = require('../controllers/challengeController');

router.get('/', challengeController); 


module.exports = router;