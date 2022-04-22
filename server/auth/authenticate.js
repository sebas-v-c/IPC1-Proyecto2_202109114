const jwt = require('jsonwebtoken');
const { jwtAcces } = require("./middleware");

function authenticate(req, res, next) {
  const token = req.body.token || req.query.token || req.headers["x-acces-token"];

  if (!token) {
    return res.status(403).json({ message: "Token is required" });
  }

  try {
    const decoded = jwt.verify(token, jwtAcces);
    req.decoded = decoded;
  } catch (e) {
    return res.status(401).json({ message: "Invalid token" });
  }

  return next();
}
exports.authenticate = authenticate;
