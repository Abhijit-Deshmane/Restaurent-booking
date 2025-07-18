import mongoose  from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema ({
    firstName :{
        type : String,
        required : true,
        minlength : [3, "firstName should contain atleast 3 character"],
        maxlength : [20, "firstName should not exceed 20 characters"],
    },
    lastName : {
        type : String,
        required : true,
        minlength : [3, "lastName should contain atleast 3 character"],
        maxlength : [20, "lastName should not exceed 20 characters"],
    },
    email : {
        type : String,
        required : true,
        validate : [validator.isEmail, "Please enter a valid email"],
    },
    phone : {
        type : String,
        required : true,
        minlength : [10, "Please enter a valid mobile number without country code"],
    },
    date : {
        type : String,
        required : true,
    },
    time : {
        type : String,
        required : true,
    },
    numberOfPeople : {
        type : Number,
        required : true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);