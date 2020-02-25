var express = require('express');
var router = express.Router();
var robot = require("../business/robot");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Robot' });
});

/* POST search. */
router.post('/buscar', function(req, res, next) {
  const body = req.body;
  const searchResult = robot.findFreeRooms(body.checkin,body.checkout)
  res.send(searchResult)
});

module.exports = router;
