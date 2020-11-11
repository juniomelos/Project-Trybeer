require('dotenv').config();
// const path = require('path');

const cors = require('cors');
const express = require('express');
const route = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(cors());
app.use('/login', route.loginRouter);


// app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((error, _req, res, _next) => {
  const { message, status } = error;
  if (status < 500) {
    return res.status(status).json(message);
  }
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => console.log(`Listening PORT ${PORT}`));
