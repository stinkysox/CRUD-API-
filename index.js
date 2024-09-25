import express from "express";
import mongoose from "mongoose";
import Product from "./models/productModel.js";
import productRoute from "./routes/productRoute.js";

//Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API server");
});

mongoose
  .connect(
    "mongodb+srv://admin:ismCUtOVF42yT6NE@apipractice.ox6uu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=ApiPractice"
  )
  .then(() => console.log("Connected to database!"))
  .catch((error) => {
    console.log("Failed to connect:", error.message);
  });
