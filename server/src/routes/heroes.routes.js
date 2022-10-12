import { Router } from "express";
import {
    findAllHeroes,
    findHeroe,
    createHeroe,
    updateHeroe,
    deleteHeroe
} from "./../controllers/heroes.controller";
import { findAllVehicles } from "./../controllers/vehicles.controller";

const router = Router();

router.get("/", findAllHeroes);
router.get("/:id", findHeroe);
router.post("/", createHeroe);
router.put("/:id", updateHeroe);
router.delete("/:id", deleteHeroe);
router.get("/:id/vehicles", findAllVehicles);

export default router;
