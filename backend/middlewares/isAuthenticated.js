import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies?.token || req.headers?.authorization?.split?.(" ")[1];
  
    if (!token) {
      return res.status(401).json({ message: "User not authenticated", success: false });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    
    req.id = decode.userId || decode.id || decode._id || (decode.user && (decode.user.id || decode.user._id));

    if (!req.id) {
      return res.status(401).json({ message: "Invalid token payload", success: false });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Auth error", error: error.message });
  }
}
export default isAuthenticated;
