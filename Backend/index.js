import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import jwt from "jsonwebtoken";
import productRouter from "./routers/productRouter.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// middleware to enable CORS
app.use(cors());

// middleware to parse JSON bodies
app.use(express.json());

// middleware to parse URL-encoded bodies(Authentication)
app.use((req, res, next) => {
  let token = req.header("Authorization");

  if (token != null) {
    token = token.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, (err, dicoded) => {
      if (dicoded == null) {
        res.json({
          message: "Invalid Token Please Login Again",
        });
        return;
      } else {
        req.user = dicoded;
      }
    });
  }
  next();
});

const connectionString = process.env.MONGO_URI;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch(() => {
    console.error("Database Connection Failed");
  });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
