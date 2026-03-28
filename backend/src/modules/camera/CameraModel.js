import mongoose from "mongoose";

const pricingSchema = new mongoose.Schema({
  sixHours: Number,
  oneDay: Number,
  twoDays: Number,
  fromDay3: Number,
});

const cameraSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: String,
  pricing: pricingSchema,
  image: String,
  description: String,
  stock: { type: Number, required: true, min: 0 },
});

export default mongoose.model("Camera", cameraSchema);