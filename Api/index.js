import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
    // console.log("there is an error")
  }
};
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });
mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!");
  });
  

  app.get("/users" , (req, res) => {
    res.send("Hello harsh dahiya")
  })

app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
  });
  