const cors = require("cors");
const express = require("express");
const routes = require("./routes");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Private-Network", true);
  app.use(cors());
  next();
});
app.use(express.json());

app.use(routes);
app.get("/re", (req, res) => {
  return res.json("hello world");
});

app.listen(5000, () => console.log("Server up in 5000"));
