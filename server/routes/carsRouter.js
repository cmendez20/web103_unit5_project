import express from 'express';
import * as carsController from '../controllers/carsController.js';

const router = express.Router();

// define routes to get, create, edit, and delete items
router.get('/', carsController.getCars);
router.get('/:id', carsController.getCar);
router.post('/', carsController.createCar);
router.patch('/:id', carsController.updateCar);
router.delete('/:id', carsController.deleteCar);

export default router;
