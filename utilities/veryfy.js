const jwt = require("jsonwebtoken");
const verifyToken = (req) => {
  try {
    const token = req.get("Cookie").split("token=")[1].trim();
    jwt.verify(token, "SECRETKEY");
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = verifyToken;
