import { Router } from "express";
import { findAllCities, findAllCountries } from "./../controllers/locations.controller";

const router = Router();

router.get("/cities", findAllCities);
router.get("/countries", findAllCountries);

export default router;
