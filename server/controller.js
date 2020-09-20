// Controller here
// complete building out the controller
const dbhelpers = require('../db/dbhelpers.js');


const controller = {
  get: (req, res) => {
    dbhelpers.getProductsHelper((err, results) =>{
      if (err) {
        res.status(400).send('error getting products')
      } else {
        res.status(200).send(results)
      }
    })
  },

  post: (req, res) => {
    dbhelpers.postProductsHelper(req.body, (err, results) => {
      if (err) {
        res.status(400).send('error posting product')
      } else {
        res.status(200).send(results)
      }
    })
  },

  put: (req, res) => {
    dbhelpers.updateProductHelper(req.params.id, req.body, (err, results) => {
      if (err) {
        res.status(400).send('error updating product')
      } else {
        res.status(200).send(results)
      }
    })
  },

  delete: (req, res) => {
    console.log('THIS IS REQ', req);
    dbhelpers.deleteProductHelper(req.params._id, (err, results) => {
      if (err) {
        res.status(400).send('error deleting product')
      } else {
        res.status(200).send(results)
      }
    })
  }

}

module.exports = controller