import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 4200,
  secret: process.env.SECRET || 'random-secret',
  jwt_secret: process.env.JWT_SECRET || 'random-jwt-secret'
};
