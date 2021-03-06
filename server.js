//All my variables here at the top for the server
const express = require("express");
const path=require('path');
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
const routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
  
  console.log("Server listening on: http://localhost:" + PORT);
});
