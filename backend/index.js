import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";


dotenv.config({});

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie-parser
app.use(cookieParser());

app.set("trust proxy", 1);

const corsOptions = {
  origin: [
    "http://localhost:5173", // local dev
    "https://goalaxis.vercel.app", // ✅ live frontend
    "https://goalaxis-9fqk7mbcr-nitesh-kumar813s-projects.vercel.app", // ✅ Vercel preview URL (optional but good)
  ],
  
    credentials: true, 
  };
  app.use(cors(corsOptions));


const PORT = process.env.PORT || 3000;

// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);



app.listen(PORT, () => {
    connectDB()
    console.log(`server running at port ${PORT}`)
})