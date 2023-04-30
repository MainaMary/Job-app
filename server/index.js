const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const notFoundMiddleware = require("./middleware/NotFound");
const errorHandlerMiddleware = require("./middleware/errorHanlderMiddleware");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobsRoutes");
const app = express();
const morgan = require("morgan");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Welcome to the home page!!");
});
app.use(express.json());

app.use(cors(
 {
  origin:"*"
 }
));
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);
app.use("api/v1/jobs", jobRoutes);
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);
const PORT = process.env.PORT || 8000;

//start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//Connect to DB
mongoose
  .connect(process.env.CONNECTION_URI)
  .then(() => console.log("MogoDB connection established"))
  .catch((err) => console.log(`Mongodb ${err.message}`));
