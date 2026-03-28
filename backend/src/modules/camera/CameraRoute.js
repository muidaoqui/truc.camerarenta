// routes/cameraRoutes.js
import express from "express";
import {
  getAllCameras,
  getCameraById,
  createCamera,
  updateCamera,
  deleteCamera,
} from "./CameraController.js";

const router = express.Router();

router.get("/", getAllCameras);
router.get("/:id", getCameraById);
router.post("/", createCamera);
router.put("/:id", updateCamera);
router.delete("/:id", deleteCamera);

export default router;