const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
// const adminData = require("./admin");
const controllers = require("../Controllers/shopControllers");

const router = express.Router();

router.get("/", controllers.getIndex);
router.get("/products", controllers.getProductsFromAdd);
router.get("/cart", controllers.getCart);
router.get("/checkout", controllers.getCheckout);
router.get("/orders", controllers.getOrders);

module.exports = router;
