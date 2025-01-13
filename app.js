const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const profile = [
    {
      name: "Rakshita",
      age: 20,
    },
    {
      name: "Aditya",
      age: 23,
    },
  ];

  res.render("index", { profiles: profile });
});

app.get("/*", (req, res) => {
  res.render("notFound");
});

app.listen(3003, () => {
  console.log("Server is running on port 3003...");
});
