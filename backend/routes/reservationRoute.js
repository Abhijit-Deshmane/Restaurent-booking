import express from "express";
import createReservation from "../controllers/createReservation.js";

const router = express.Router();

router.post("/send",createReservation);

export default router;
