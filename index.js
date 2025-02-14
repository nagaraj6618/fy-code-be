import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
// import mongoose from "mongoose";
dotEnv.config();

const app = express();
const PORT = process.env.PORT ;

app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
   return res.status(200).json({
      message:"Server Running.."
   });
});


app.listen(PORT,() => {
   console.log("Server Started at Port : ",PORT)
});