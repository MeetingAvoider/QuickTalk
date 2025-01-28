const jwt = require("jsonwebtoken");
const authMiddleware = async function (req, res, next) {
  try {
    const token = req.cookies.token;
    const verified = jwt.verify(token, process.env.SECERET_KEYS);
    console.log(verified);
    if (!verified) {
      return res.send(404).json({
        message: "Unauthorized access",
        success: false,
      });
    }
    req.body.userId = verified.userID;
    console.log(req.body.userId);
    next();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
module.exports = authMiddleware;
