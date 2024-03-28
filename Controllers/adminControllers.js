const Product = require("../Models/productsModel");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Products",
  });
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};
exports.postAddProducts = (req, res, next) => {
  console.log("17 ==>", req.body);
  const title = req?.body?.title;
  const imgUrl = req?.body?.imgUrl;
  const description = req?.body?.description;
  const price = req?.body?.price;
  const product = new Product(title, imgUrl, description, price);
  product.save();
  //   products.push({ title: req?.body?.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      path: "admin/products",
      pageTitle: "Admin Products",
      prods: products,
    });
  });
};
