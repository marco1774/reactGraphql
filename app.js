const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("ciao");
});

app.listen(4000, () => {
  console.log(`Listening at http://localhost:4000`);
});
