// complete and fix the dbhelpers
const db = require('./');


module.exports.getProductsHelper = (callback) => {
  let queryString = `SELECT * FROM products`
  db.query(queryString, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

module.exports.postProductsHelper = (data, callback) => {
  let queryString = `INSERT INTO products (item, min_cost, curr_bid, ends_in, image) VALUES ('${data.item}', ${data.min_cost}, 0, 3, '${data.image}');`;
  db.query(queryString, (err, results) => {
    if (err) {
      callback(err)
    } else {
      callback(null, results);
    }
  })
}

module.exports.updateProductHelper = (id, data, callback) => {
  let queryString =`UPDATE products SET curr_bid=${data.curr_bid} WHERE id=${id};`;
  db.query(queryString, (err, results) => {
    if (err) {
      callback(err)
    } else {
      callback(null, results)
    }
  })
}

module.exports.deleteProductHelper = (id, callback) => {
  let queryString = `DELETE FROM products WHERE id=${id};`;
  db.query(queryString, (err, results) => {
    if (err) {
      callback(err)
    } else {
      callback(null, results)
    }
  })
}

module.exports.getOne = (searchedWord, callback) => {
  console.log('GETONE IS BEING CALLED')
  let queryString = `SELECT * FROM products WHERE item LIKE '%${searchedWord}%';`
  db.query(queryString, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

//SELECT * FROM Persons WHERE FirstName LIKE '%la%'