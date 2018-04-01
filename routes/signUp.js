var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('signUp');
});
router.post('/', function(req, res, next) {
	 var username=req.body.username;
	 var name = req.body.name;
	 var email = req.body.email;
 	 var password=req.body.password;
 	 var newPerson = new Person({
 	 	 name : name,
         email: email,
         password: password,
         username: username
      });
 	 newPerson.save(function(err, Person){
         if(err)
            res.send("gamidia");
         else
            res.send("ola kala");
      });
});
module.exports = router;
