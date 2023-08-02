import { Response, Request } from "express";
import {
  createCategoria,
  getCategoria,
  getCategorias,
  updateCategoria,
  deleteCategoria,
} from "../services/categoria";

const postCategoriaCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await createCategoria(body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getCategoriasCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getCategorias();
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getCategoriaCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCategoria(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const updateCategoriaCtrl = async (
  { params, body }: Request,
  res: Response
) => {
  try {
    const { id } = params;
    const response = await updateCategoria(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteCategoriaCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCategoria(id);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

export {
  deleteCategoriaCtrl,
  getCategoriaCtrl,
  getCategoriasCtrl,
  postCategoriaCtrl,
  updateCategoriaCtrl,
};
