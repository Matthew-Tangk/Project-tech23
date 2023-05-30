console.log("This is a testrun.");
const express = require("express");
const app = express();

app
  .use(express.static("static"))
  .set("view engine", "ejs")
  .set("views", "views")

  .get("/metallica", (req, res) => {
    res.render("index.ejs");
  })
  .get("/about", (req, res) => {
    res.send("<h1>About me</h1>");
  })
  .get("/login", (req, res) => {
    res.send("<h1>This is the login page.</h1>");
  })

  .get("/qform", (req, res) => {
    res.render("qForm.ejs");
  })

  .get("/upload", (req, res) => {
    res.render("upload.ejs");
  })

  .listen(420);

function onhome(req, res) {
  res.send("<h1>This is a testrun.</h1>");
}

function onlogin(req, res) {
  res.send("<h1>This is the login page.</h1>");
}

function onabout(req, res) {
  res.send("<h1>About me</h1>");
}
