const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const databse = require('./data/database');
const db = new databse(user);

function initialize(passport) {
  // Function
  const authenticateUser = (username, password, done) => {
    const user = db.findUserByUsername(username);

    if (user === null) {
      return done(null, false, { message: "No user with that username" });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }

  }



  passport.use(new LocalStrategy(
    { usernameField: 'user' }), authenticateUser
  );
  passport.serializeUser((user, done) => {

  });

  passport.deSerializeUser((id, done) => {

  });
}

module.exports = initialize;
