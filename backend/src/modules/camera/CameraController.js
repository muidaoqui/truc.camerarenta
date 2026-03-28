// controllers/cameraController.js
import Camera from "./CameraModel.js";

export const getAllCameras = async (req, res) => {
  const cameras = await Camera.find();
  res.json(cameras);
};

export const getCameraById = async (req, res) => {
  const camera = await Camera.findById(req.params.id);
  res.json(camera);
};

export const createCamera = async (req, res) => {
  const camera = await Camera.create(req.body);
  res.json(camera);
};

export const updateCamera = async (req, res) => {
  const camera = await Camera.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(camera);
};

export const deleteCamera = async (req, res) => {
  await Camera.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};