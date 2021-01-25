const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";

export const auth = (req: any, res: Response, next: NextFunction) => {
  const brearheader = req.headers["authorization"];
  if (typeof brearheader !== "undefined") {
    const breartoken = brearheader.split(" ");
    const token = breartoken[1];
    if (token) {
      // req.token = token;
      jwt.verify(token, "secretKey", (err: Error, data: any) => {
        if (err) {
          res.json({ message: "invalid user" });
        } else {
          req.token = data;
        }
      });
      next();
    }
  } else {
    res.sendStatus(404);
  }
};

// export default auth;
