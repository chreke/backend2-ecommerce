const jwt = require("jsonwebtoken");

const JWT_SECRET = "b5RsRyFynSU6NE7fxW__beElOhAZaFKHJwVLSz9vhgW";

const generateToken = (user) => {
  const userId = user._id.toString();
  return jwt.sign(
    {userId, username: user.username},
    JWT_SECRET,
    {expiresIn: "1 h", subject: userId}
  );
};

const loginUser = (req, _res, next) => {
  const authHeader = req.header("Authorization");
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    req.user = jwt.verify(token, JWT_SECRET);
  }
  next();
};

const requireLogin = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.sendStatus(401);
  }
}

module.exports = { generateToken, loginUser, requireLogin };
