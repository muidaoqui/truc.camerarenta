import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// import routes
import cameraRoutes from "./src/modules/camera/CameraRoute.js";
import bookingRoutes from "./src/modules/booking/BookingRoute.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ================== CONNECT DB ==================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// ================== ROUTES ==================
app.get("/", (req, res) => {
  res.send("API running...");
});

// camera
app.use("/api/cameras", cameraRoutes);

// booking
app.use("/api/bookings", bookingRoutes);

// ================== ERROR HANDLER ==================
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// ================== START SERVER ==================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

