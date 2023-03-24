const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routers/userRouter");
const userController = require("./controllesrs/userControlles");
dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("DB connection successful!"));

app.use("/", userRouter);
// app.post("/post", userController.post);
// app.get("/get-posts", userController.getAllPosts);
// app.post("/register", userController.signup);
// app.post("/login", userController.login);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App runnning on port ${port}`);
});
