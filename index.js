const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());

app.use(cors({ credentials: true, origin: "http://localhost:8080" }));

/* app.get("/", (req, res) => {
  res.status(200).json({ message: "API ON" });
}); */

//Routes import
const Routes = require('./routes/index')
app.use('/', Routes)

app.listen(port, function () {
  console.log(`Server running on port ${port}.`);
});
