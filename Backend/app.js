const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3080;

const app = express();

const todoRoutes = require("./routes/todos-route");

app.use(cors());

app.use(bodyParser.json());

app.use(todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
