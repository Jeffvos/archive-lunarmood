const express = require('express');
const lunar = require('./lunar.js');

const app = express();
const port = process.env.port || 7000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const mainRouter = require('./routes/main');
app.use(mainRouter);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
