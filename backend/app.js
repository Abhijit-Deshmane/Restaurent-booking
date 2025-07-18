import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbconnection } from "./database/dbconnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRoute from "./routes/reservationRoute.js";


const app = express();
dotenv.config({path: "./config/config.env"});
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/reservation", reservationRoute);


dbconnection();
app.use(errorMiddleware);

export default app;