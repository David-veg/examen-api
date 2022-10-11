import { Router } from "express";
import * as escuela from "../controllers/estudiante";
const router = Router();
router.get("/", escuela.getEstudiante);

export default router;


