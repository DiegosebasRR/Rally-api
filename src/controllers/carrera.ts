import { Response, Request } from "express";
import {
  createCarrera,
  getCarrera,
  getCarreras,
  updateCarrera,
  deleteCarrera,
} from "../services/carrera";

const postCarreraCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await createCarrera(body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getCarrerasCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getCarreras();
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getCarreraCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCarrera(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const updateCarreraCtrl = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateCarrera(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteCarreraCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCarrera(id);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

export {
  deleteCarreraCtrl,
  getCarreraCtrl,
  getCarrerasCtrl,
  postCarreraCtrl,
  updateCarreraCtrl,
};
