const express = require('express');
let bodyParser = require('body-parser');

const app = express();
const routes = require('./routes');

app.use(bodyParser.json());
app.set('port', process.env.PORT || 3001);
app.use('/', routes);

app.listen(app.get('port'), () => {
  console.log(`App is listening on port ${app.get('port')}`);
});

module.exports = app;