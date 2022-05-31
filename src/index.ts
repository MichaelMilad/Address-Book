import express, {
  Application,
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler
} from 'express';
import morgan from 'morgan';
import { config } from './config';
import apiRouter from './router/apiRoute';
import mongoose from 'mongoose';
import session from 'express-session';

const app: Application = express();

//MongoDB Connection using Mongoose
mongoose
  .connect('mongodb://localhost:27017/address-book')
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log(`Database Conenction Failed. ${err}`));

app.use(
  session({
    name: 'Session',
    secret: config.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      // secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);
// HTTP request logger middleware
app.use(morgan('short'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World 🌍'
  });
});

//add routing for /api path
app.use('/api', apiRouter);

//Simple Error Handler
app.use(
  '/',
  (
    error: ErrorRequestHandler,
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction
  ) => {
    res.json({
      message: 'An Error Occured',
      error
    });
  }
);

// start express server
app.listen(config.port, () => {
  console.log(`Server is starting at port:${config.port}`);
});

export default app;
