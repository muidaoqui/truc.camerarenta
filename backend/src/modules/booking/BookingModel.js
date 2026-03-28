import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  cameraId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Camera",
    required: true,
  },
  phoneNumber: { type: String, required: true },

  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },

  rentalType: String,
  totalPrice: Number,

  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled", "returned"],
    default: "pending",
    required: true,
  },

  actualReturnDate: Date,

}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);