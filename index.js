import express from "express";
import { static as expressStatic } from "express";
import { urlencoded, json } from "express";
import { config as dotenvConfig } from "dotenv";
import { MongoClient } from "mongodb";
import multer from "multer";
import path from "path";

const app = express();
const port = 420;

app.use(expressStatic("static"));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(urlencoded({ extended: true }));
app.use(json());
dotenvConfig();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
});

app.post("/qform", (req, res) => {
  res.send("Thank you for your submission!");
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    console.log("Connected successfully to port", port);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

app.route("/metallica").get((req, res) => {
  res.render("index.ejs");
});

app.route("/requirements").get((req, res) => {
  res.render("requirements.ejs");
});

app.route("/qform").get((req, res) => {
  res.render("qForm.ejs");
});

app.route("/finish").get((req, res) => {
  res.render("thankU.ejs");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage, limits: { files: 3 } });

app
  .route("/upload")
  .get((req, res) => {
    res.render("upload.ejs");
  })
  .post(upload.array("image", 3), (req, res) => {
    res.render("thankU.ejs", {
      imageURLs: req.files.map((file) => file.filename),
    });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
