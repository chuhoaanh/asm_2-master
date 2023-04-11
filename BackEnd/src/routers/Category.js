import express from 'express'
import { create, getAll, getOne, remove, update } from '../controllers/Category';
const router = express.Router();
router.post("/category", create)
router.get("/category", getAll)
router.get("/category/:id", getOne)
router.put("/category/:id", update)
router.delete("/category/:id", remove)
export default router