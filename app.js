const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();
// To register the an Engine
// app.engine("hbs", expressHbs());

// we were telling express that we were using pug engine to render dynamic content
// app.set("view engine", "pug");

app.set("view engine", "ejs");
// now we were setting the path for html files where we will be having place holders
app.set("views", "views");

const adminRoutesData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutesData?.routes);
console.log("products ==>", adminRoutesData?.products);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
