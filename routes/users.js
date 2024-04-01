var express = require('express');
var router = express.Router();
const app = express();
const coolRouter = require('./routes/cool');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.use('/cool', coolRouter);

module.exports = router;
