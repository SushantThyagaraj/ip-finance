import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import mongoose from 'mongoose';

const app = express();
app.disable('x-powered-by');

// View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// MongoDB setup
// Connection URL
const url = 'mongodb://ipfa-user:interoperability-2018@ds163013.mlab.com:63013/ipfa_finance_db';
mongoose.connect('mongodb://ipfa-user:interoperability-2018@ds163013.mlab.com:63013/ipfa_finance_db');
console.log("MongoDB is connected");

// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res
    .status(err.status || 500)
    .render('error', {
      message: err.message
    });
});

export default app;
