import { Router } from "express";
import {
  deleteCarreraCtrl,
  getCarreraCtrl,
  getCarrerasCtrl,
  postCarreraCtrl,
  updateCarreraCtrl,
} from "../controllers/carrera";

const router = Router();

router.get("/", getCarrerasCtrl);

router.get("/:id", getCarreraCtrl);

router.post("/", postCarreraCtrl);

router.put("/:id", updateCarreraCtrl);

router.delete("/:id", deleteCarreraCtrl);

export { router };
