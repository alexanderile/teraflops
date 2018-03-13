const express = require('express');
const router = express.Router();

const User = require(`${__dirname}/../../models/user.js`);

router
  .route('/create/user')
  .post((req, res) => {
	  if (name !== 'user') {
		  return false;
	  };
	  const m = new User();
	  User.find(req.body, (err, results) => {
		  m.sameUser = results;
		  Object.assign(m, req.body);
		  m.save((err) => {
			  if (err && !m.isExist) {
				  res.json({error: {message: err.message, status: 1}});
			  } else if (m.isExist) {
				  req.session.user = {
					  login: m.login,
					  date: new Date(),
					  teams: results[0].teams
				  };
				  res.json({[name]: req.session.user, message: 'You have successfully logged in'});
			  } else {
				  req.session.user = {
					  login: m.login,
					  date: new Date(),
					  teams: []
				  };
				  res.json({[name]: req.session.user, message: 'This login is out of base: new user created and signed'});
			  }
		  })
	  })
  })

module.exports = router;
