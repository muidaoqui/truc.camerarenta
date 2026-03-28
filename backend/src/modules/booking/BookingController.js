import Booking from "./BookingModel.js";
import Camera from "../camera/CameraModel.js";
import { calcPrice } from "../../utils/calcPrice.js";

const VALID_STATUS = ["pending", "confirmed", "cancelled", "returned"];

// ================= CREATE =================
export const createBooking = async (req, res) => {
  try {
    const { cameraId, startDate, endDate, rentalType, phoneNumber } = req.body;

    // validate input
    if (!cameraId || !startDate || !endDate || !phoneNumber) {
      return res.status(400).json({ message: "Missing fields" });
    }

    if (new Date(startDate) >= new Date(endDate)) {
      return res.status(400).json({ message: "Invalid date range" });
    }

    const camera = await Camera.findById(cameraId);
    if (!camera) {
      return res.status(404).json({ message: "Camera not found" });
    }

    // check availability theo thời gian
    const activeBookings = await Booking.countDocuments({
      cameraId,
      status: "confirmed",
      $or: [
        {
          startDate: { $lte: endDate },
          endDate: { $gte: startDate },
        },
      ],
    });

    if (activeBookings >= camera.stock) {
      return res.status(400).json({ message: "Fully booked" });
    }

    const totalPrice = calcPrice(
      camera.pricing,
      startDate,
      endDate,
      rentalType
    );

    const booking = await Booking.create({
      cameraId,
      phoneNumber,
      startDate,
      endDate,
      rentalType,
      totalPrice,
    });

    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ================= GET ALL =================
export const getAllBookings = async (req, res) => {
  const bookings = await Booking.find()
    .populate("cameraId")
    .sort({ createdAt: -1 });

  res.json(bookings);
};

// ================= GET ONE =================
export const getBookingById = async (req, res) => {
  const booking = await Booking.findById(req.params.id).populate("cameraId");
  res.json(booking);
};

// ================= UPDATE =================
export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const newStatus = req.body.status;

    if (newStatus && !VALID_STATUS.includes(newStatus)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const oldStatus = booking.status;
    const camera = await Camera.findById(booking.cameraId);

    if (!camera) {
      return res.status(404).json({ message: "Camera not found" });
    }

    // CONFIRM → check full theo time
    if (oldStatus !== "confirmed" && newStatus === "confirmed") {
      const activeBookings = await Booking.countDocuments({
        cameraId: booking.cameraId,
        status: "confirmed",
        $or: [
          {
            startDate: { $lte: booking.endDate },
            endDate: { $gte: booking.startDate },
          },
        ],
      });

      if (activeBookings >= camera.stock) {
        return res.status(400).json({ message: "Fully booked" });
      }
    }

    // RETURNED → lưu ngày trả
    if (oldStatus === "confirmed" && newStatus === "returned") {
      booking.actualReturnDate = new Date();
    }

    booking.status = newStatus || booking.status;
    await booking.save();

    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ================= DELETE =================
export const deleteBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);

  if (!booking) {
    return res.status(404).json({ message: "Not found" });
  }

  await booking.deleteOne();

  res.json({ message: "Deleted" });
};