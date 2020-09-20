// Controller here
// complete building out the controller
const dbhelpers = require('../db/dbhelpers.js');


const controller = {
  get: (req, res) => {
    console.log(req.body);
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
    dbhelpers.deleteProductHelper(req.params.id, (err, results) => {
      if (err) {
        res.status(400).send('error deleting product')
      } else {
        res.status(200).send(results)
      }
    })
  },

  getOne: (req, res) => {
    console.log(req);
    dbhelpers.getOne(req.params.searchedWord, (err, results) => {
      if (err) {
        res.status(400).send('error getting one result for search')
      } else {
        res.status(200).send(results);
      }
    })
  }

}

module.exports = controller