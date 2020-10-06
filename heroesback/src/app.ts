import createError, { HttpError } from 'http-errors';
import express, { Application, Request, Response, NextFunction} from 'express';
import logger from 'morgan';

import heroeRouter from './routes/heroeRoute';
//let usersRouter = require('./routes/users');

let app: Application = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/heroe', heroeRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createError(404, 'Not found'));
});

// error handler
app.use(function(err: HttpError, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({"error": "error"});
});

export default app;
