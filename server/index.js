// Express Server
// FIX ME :(
  const express = require('express');
  const bodyParser = require('body-parser');
  const morgan = require('morgan');
  const cors = require('cors');
  const path = require('path');
  const router = require('./router.js');

  const server = express();
  const port = 3000;

  server.use('/', express.static(path.join(__dirname + '/../client/dist')));

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: true}));

  server.use(morgan('dev'));
  server.use(cors());

  server.use('/', router);
  server.use('/:id', router);

  server.listen(port, () => console.log('Connected to port: 3000'))