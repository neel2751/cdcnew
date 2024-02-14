// middleware/session.js
import session from "next-session";

export default session({
  secret: process.env.JWT_SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  rolling: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  },
});
