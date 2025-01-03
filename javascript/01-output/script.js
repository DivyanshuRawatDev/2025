const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Middleware 1'); // 1
  next();
});

app.get('/test', (req, res, next) => {
  console.log('Route Handler'); // 2
  res.send('Hello World'); 
});

app.use((req, res, next) => {
  console.log('Middleware 2'); //3
  next();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
