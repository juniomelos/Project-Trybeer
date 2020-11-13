require('dotenv').config();
// const path = require('path');

const cors = require('cors');
const express = require('express');
const route = require('./routes');
const controllers = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(cors());
// console.log(route.loginRouter.loginRouter);
app.use('/login', route.loginRouter);
app.use('/register', route.registerRouter);

app.get('/products', controllers.getAllProducts);

// app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((error, _req, res, _next) => {
  const { message, status } = error;
  if (status < 500) {
    return res.status(status).json(message);
  }
  res.status(500).send('Broke: ' + message);
});

app.listen(PORT, () => console.log(`Listening PORT ${PORT}`));
