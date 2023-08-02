import { Router } from "express";
import {
  deleteCategoriaCtrl,
  getCategoriaCtrl,
  getCategoriasCtrl,
  postCategoriaCtrl,
  updateCategoriaCtrl,
} from "../controllers/categoria";

const router = Router();

router.get("/", getCategoriasCtrl);

router.get("/:id", getCategoriaCtrl);

router.post("/", postCategoriaCtrl);

router.put("/:id", updateCategoriaCtrl);

router.delete("/:id", deleteCategoriaCtrl);

export { router };
