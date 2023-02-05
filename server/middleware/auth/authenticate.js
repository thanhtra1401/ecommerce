const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  try {
    const decode = jwt.verify(token, "tratra");
    if (decode) {
      req.user = decode;
      next();
    } else {
      res.status(401).send({ message: "Vui lòng đăng nhập" });
    }
  } catch (error) {
    console.log(error);
    res.status(403).send({ message: "Invalid token" });
  }
};
module.exports = authenticate;
