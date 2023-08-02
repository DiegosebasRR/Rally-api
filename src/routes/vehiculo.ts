import { Router } from "express";
import {
  deleteVehiculoCtrl,
  getVehiculoCtrl,
  getVehiculosCtrl,
  postVehiculoCtrl,
  updateVehiculoCtrl,
} from "../controllers/vehiculo";

const router = Router();

router.get("/", getVehiculosCtrl);

router.get("/:id", getVehiculoCtrl);

router.post("/", postVehiculoCtrl);

router.put("/:id", updateVehiculoCtrl);

router.delete("/:id", deleteVehiculoCtrl);

export { router };
