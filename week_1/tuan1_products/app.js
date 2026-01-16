const express = require('express');
const session = require('express-session');

console.log('APP.JS IS RUNNING');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');

app.use('/', authRoutes);
app.use('/', productRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
