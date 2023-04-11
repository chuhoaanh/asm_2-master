import express from 'express'
import { create, getAll, getOne, remove, update } from '../controllers/Product';
import checkPerMission from '../middlewares/checkPermission';
const router = express.Router();
router.post("/products", checkPerMission, create)
router.get("/products", getAll)
router.get("/products/:id", getOne)
router.put("/products/:id", checkPerMission, update)
router.delete("/products/:id", checkPerMission, remove)
export default router