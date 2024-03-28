const fs = require("fs");
const path = require("path");
module.exports = class Product {
  constructor(t, imgUrl, description, price) {
    this.title = t;
    this.imgUrl = imgUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    // simpleway of handling data model
    // products?.push(this.title);
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(callBack) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (!err) {
        return callBack(JSON.parse(fileContent));
      }
      return callBack([]);
    });
  }
};
