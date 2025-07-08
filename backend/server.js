import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
//import connectDB from "./config/db.js";
import sequelize from "./config/dbSql.js";
import userRoutes from "./routes/userRoutes.js";
import loanRoutes from "./routes/loanRoutes.js";
import session from "express-session";
import passport from "passport";
import passportConfig from "./config/passportConfig.js";
import errorHandler from "./middlewares/errorMiddleware.js";

const app = express();


// Initialize Passport
passportConfig(passport);

// Session setup
app.use(
  session({
    secret: "23y3hwhnsjjw", // Keep this secret safe!
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(errorHandler)

let origin;

if (process.env.NODE_ENV == "production") {
  origin = "https://loan-backend2.onrender.com/";
} else {
  origin = "http://localhost:5173";
}

//PRODUCTION ORIGIN
let corsOptions = {
  origin: origin,
};

app.use(cors(corsOptions));
app.use(express.json());

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", loanRoutes)

app.get("/testing", async (req, res) => {
  console.log("WORKING");
  res.json({ message: "Hello" });
});

// Google OAuth routes
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"], // Scopes you need from the Google account
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful login, redirect to the dashboard or home
    res.redirect("/profile");
  }
);


