console.log("Welcome to FastPass");
const express = require("express");
const app = express();
const path = require("path");

app
  .use(express.static("static"))
  .set("view engine", "ejs")
  .set("views", "views");

require("dotenv").config(); // Load environment variables from .env file

////////// SET-UP MONGODB CONNECTION //////////

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.post("/qform", (req, res) => {
  res.send("Thank you for your submission!");
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    console.log("Connected successfully to port 420");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

////////// SET-UP ROUTES  //////////

app
  .get("/metallica", (req, res) => {
    res.render("index.ejs");
  })

  .get("/qform", (req, res) => {
    res.render("qForm.ejs");
  })

  .get("/finish", (req, res) => {
    res.render("thankU.ejs");
  });

function onhome(req, res) {
  res.send("<h1>This is a testrun.</h1>");
}

////////// UPLOAD FILES //////////

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.get("/upload", (req, res) => {
  res.render("upload.ejs");
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.render("thankU.ejs", { imageURL: req.file.filename });
});

app.listen(420);
