const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {custom_json, not_found} = require('./helper');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
// Put these statements before you define any routes.
app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.post('/test', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      status: 'error',
      error: 'req body cannot be empty',
    });
  }

  return res.status(200).json({
    status: 'succes',
    data: req.body,
  });
});

// Routing
const login = require('./routes/login');
app.use('/login', login);

app.get('/', (req, res) => {
  res.json(app._router.stack);
  res.status(200).json(custom_json(true, 'Hello world !'));
});
// 404 not found
app.use(function (req, res, next) {
  res.status(404).json(not_found);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//Run app, then load http://localhost:port in a browser to see the output.
