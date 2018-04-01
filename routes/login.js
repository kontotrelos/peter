var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/', function(req, res, next) {

  Person.find({email:req.body.email , password: req.body.password}, 
  function(err, response){
         if(err)
            res.send("gamidia");
         else
            res.send(response);
      	console.log(response);
	});

});
module.exports = router;
