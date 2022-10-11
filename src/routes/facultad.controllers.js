import { Router } from "express";
import * as facultad from "../controllers/facultad.controllers";
const router = Router();
router.get("/", facultad.getFacultades);

export default router;
