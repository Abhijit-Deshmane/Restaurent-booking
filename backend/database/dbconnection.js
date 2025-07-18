import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URL,{
        dbname : "restaurant-booking",
    }).then(()=> {
        console.log("Database connected successfully");
    }).catch((errror) => {
        console.log("Error whhile connecting to database", error);
    });
};

