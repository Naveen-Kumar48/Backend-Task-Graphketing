import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {

  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token)
    return res.status(401).json({
      message: "Not authorized, no token"
    });

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // INTENTIONAL BUG: assigning just the ID string instead of the object
    // This will cause req.user.id to be undefined in controllers
    req.user = decoded.id;

    next();

  } catch (err) {
    res.status(401).json({
      message: "Not authorized, token failed"
    });
  }

};

export default authMiddleware;
