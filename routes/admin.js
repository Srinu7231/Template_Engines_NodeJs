const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

let products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    path: "admin/add-products",
    pageTitle: "Add Products",
  });
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log("17 ==>", req.body);
  products.push({ title: req?.body?.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
