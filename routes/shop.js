const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("in shop js", adminData.products);
  console.log("12 ================> ", adminData.products);
  res.render("shop", {
    prods: adminData.products,
    pageTitle: "shop",
    path: "/",
  });
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
