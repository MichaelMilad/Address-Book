import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';

async function verifyToken(req: Request, res: Response, next: NextFunction) {
  try {
    const token: string = req.session.token as string;
    if (jwt.verify(token as string, config.jwt_secret)) {
      return next();
    }
  } catch (e) {
    return res.status(401).send(`Unauthorized\n${e}`);
  }
}

export default verifyToken;
