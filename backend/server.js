import dotenv from "dotenv"
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
const app = express()

let origin;

if (process.env.NODE_ENV == "production") {
    origin = "https://real-estate-frontend-z0wx.onrender.com"
} else {
    origin = "http://localhost:5173"
}

//PRODUCTION ORIGIN
let corsOptions = {
    origin: origin
}

app.use(cors(corsOptions))
app.use(express.json())

async function runServer(){
    try {
        await connectDB()
        console.log("Database connected successfully...")
        app.listen(process.env.PORT, () => console.log("Server running on port 5000"))
    } catch (error) {
        console.log(error)
    }
}
runServer()


app.use("/api/v1", userRoutes);

app.get("/testing", async (req, res) => {
    console.log("WORKING")
    res.json({message: "Hello"}) 
})



