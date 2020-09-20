// Router here
// these routes are correct. there is no need to modify anything!
const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router
  .route('/products')
  .get(controller.get)
  .post(controller.post)

router
  .route('/products/:id')
  .put(controller.put)
  .delete(controller.delete)

router
  .route('/products/:searchedWord')
  .get(controller.getOne)

module.exports = router