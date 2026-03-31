import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export function signToken(admin) {
  return jwt.sign(admin, SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    console.log("JWT ERROR:", err.message); // 👈 debug
    return null;
  }
}