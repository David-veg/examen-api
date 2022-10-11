import { Router } from "express";
import * as escuela from "../controllers/escuela.controllers";
const router = Router();
router.get("/", escuela.getEscuelas);
router.post("/", escuela.createEscuela);
router.get("/:id", escuela.getEscuela);
router.put("/:id", escuela.updateEscuela);
router.delete("/:id", escuela.deleteEscuela);
export default router;
