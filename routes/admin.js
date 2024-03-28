const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();
const shopControllers = require("../Controllers/shopControllers");
const adminControllers = require("../Controllers/adminControllers");

// /admin/add-product => GET
router.get("/add-product", adminControllers.getAddProducts);

// /admin/add-product => POST
router.post("/add-product", adminControllers.postAddProducts);
router.get("/products", adminControllers.getProducts);

module.exports = router;
