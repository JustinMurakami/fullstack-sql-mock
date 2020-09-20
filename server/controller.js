// Controller here
// complete building out the controller
const dbhelpers = require('../db/dbhelpers.js');


const controller = {
  get: (req, res) => {
    console.log('GET CONTROLLER!!!')
    dbhelpers.getProductsHelper((err, results) =>{
      if (err) {
        res.status(400).send('error getting products')
      } else {
        res.status(200).send(results)
      }
    })
  },

  post: (req, res) => {

  },

  put: (req, res) => {},

  delete: (req, res) => {}

}

module.exports = controller