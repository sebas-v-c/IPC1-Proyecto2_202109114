const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const database = require('../data/database');
const db = new database('users')

function initialize(passport) {
  // Function
  const authenticateUser = async (username, password, done) => {
    const user = db.findUserByUsername(username);

    if (user === null) {
      return done(null, false, { message: "No user with that username" });
    }

    try {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return done(null, user)
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }

  }

  passport.use(new LocalStrategy(
    { usernameField: 'username' }, authenticateUser)
  );

  passport.serializeUser((user, done) => done(null, user.username));

  passport.deserializeUser((username, done) => {
    return done(null, db.findUserByUsername(username));
  });
}


module.exports = initialize;
