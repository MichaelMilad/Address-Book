import jwt from 'jsonwebtoken';
import { config } from '../config';
import { Request, Response, NextFunction } from 'express';

declare module 'express-session' {
  export interface SessionData {
    token: string;
  }
}

const getToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await jwt.sign('Some String', config.jwt_secret);
    req.session.token = token;
    res.json({
      message: 'Token crated and Saved In Session',
      token
    });
  } catch (error) {
    next(error);
  }
};

export default getToken;
