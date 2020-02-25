var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Robot' });
});

/* POST search. */
router.post('/buscar', function(req, res, next) {
  const body = res.body;
  res.send({res:"sucess"})
});

module.exports = router;
