// routes/users.js

var express = require("express");
var secured = require("../controllers/secured");
var router = express.Router();
var db = require("../models");

/* GET user profile. */
router.get("/user", secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  console.log(req.user);
  db.User.findOne({ //consider changing this to a findAll and add handling if more than one get added somehow.
    where: {
     authId: req.user.user_id,
    }
  }).then(res => {
    if(res) {
      console.log("user exists!");
    } else {
      //save the relevant auth0 user info into our DB, 
    db.User.create({
      authId: req.user.user_id,
      email: req.user.emails[0].value,
      profilePicture: req.user.picture,
    }).then(new_user => {
      console.log(new_user);
      //show prompt to complete profile; populate any existing values
    })
    }

  })

    //currently, this is the code that is displaying what we see on the profile page at /user (in the userProfile.handlebars file). 
    res.render("userProfile", {
        userProfile: JSON.stringify(userProfile, null, 2),
        title: "Profile page",
        //we will need to add handling above here to select whether the fullname here is the userProfile.displayname from Auth0, or the username from the DB.
        fullname: userProfile.displayName,
        profileImg: userProfile.picture
      });
  });

// });

module.exports = router;
