import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservationSchema.js";

const createReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time, numberOfPeople } =
    req.body;
  

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !date ||
    !time ||
    !numberOfPeople
  ) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }

  try {
    const reservation = await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
      numberOfPeople,
    });
    res.status(201).json({
      success: true,
      message: "Reservation Created Successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors)
        .map((val) => val.message)
        .join(", ");

      return next(new ErrorHandler(message, 400));
    }
    return next (error);
  }
};

export default  createReservation;