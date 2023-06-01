console.log("Welcome to FastPass");
const express = require("express");
const app = express();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

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

  .get("/finish", (req, res) => {
    res.render("thankU.ejs");
  })

  .listen(420);

app.post("/upload", upload.array("files", 3), function (req, res) {
  const files = req.files;
  console.log(files);

  res.send("Files uploaded successfully!");
});

function onhome(req, res) {
  res.send("<h1>This is a testrun.</h1>");
}

function onlogin(req, res) {
  res.send("<h1>This is the login page.</h1>");
}

function onabout(req, res) {
  res.send("<h1>About me</h1>");
}
