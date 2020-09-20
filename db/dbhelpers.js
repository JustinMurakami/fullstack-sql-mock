// complete and fix the dbhelpers
const db = require('./');


module.exports.getProductsHelper = (callback) => {
  console.log('hello');
  let queryString = `SELECT * FROM products`
  db.query(queryString, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

module.exports.postProductsHelper = () => {}

module.exports.updateProductHelper = () => {}

module.exports.deleteProductHelper = () => {}
