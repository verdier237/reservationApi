// models/Reservation.js
const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    driver : {
        type : String,
        required : true
    },
    date: {
      type: Date,
      required: true,
    },
    positionDriver: {
        lat:{
            type : String,
            required: true
        },
        long:{
            type : String,
            required: true
        }
    },
    positionClient: {
            lat:{
                type : String,
                required: true
            },
            long:{
                type : String,
                required: true
            }
    },
    price: {
      type: Number,
      required: true
    },
    type: {
      type : String,
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed"],
      default: "pending",
    }
  }
);

module.exports = mongoose.model("Reservation", ReservationSchema);
