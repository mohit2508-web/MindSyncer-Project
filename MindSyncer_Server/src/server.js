import dotenv from "dotenv"
import connectDB from "./config/database.js";
import { app } from "./app.js";
dotenv.config({
    path:'./.env'
})
connectDB().
then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`App is listeing on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`MongoDB connection failed`,err)
})


