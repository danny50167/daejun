//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.get("/DB", (req, res) => {
  const DB = fs.readFileSync("public/DB/data.json", { encoding: "utf-8" });
  res.send(DB);
});
app.post("/DB", (req, res) => {
  const body = req.body;

  let DB = JSON.parse(
    fs.readFileSync("public/DB/data.json", { encoding: "utf-8" })
  );
  DB.push(body.payload);

  fs.writeFileSync("public/DB/data.json", JSON.stringify(DB), {
    encoding: "utf-8",
  });

  res.json({ payload: "YYYYY" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000\n-> http://localhost:3000 <-");
});
