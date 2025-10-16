import express from "express";
import * as carsController from "../controllers/carsController";

const router = express.Router();

// define routes to get, create, edit, and delete items
router.get("/", carsController.getCars);
router.get("/:id", carsController.getCar);
router.post("/createCar", carsController.createCar);
router.patch("/updateCar", carsController.updateCar);
router.delete("/deleteCar", carsController.deleteCar);

export default router;
