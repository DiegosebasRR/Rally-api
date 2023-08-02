import { Response, Request } from "express";
import {
  createVehiculo,
  getVehiculo,
  getVehiculos,
  updateVehiculo,
  deleteVehiculo,
} from "../services/vehiculo";

const postVehiculoCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await createVehiculo(body);
    console.log(body.image);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getVehiculosCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getVehiculos();
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getVehiculoCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getVehiculo(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const updateVehiculoCtrl = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateVehiculo(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteVehiculoCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteVehiculo(id);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

export {
  deleteVehiculoCtrl,
  getVehiculoCtrl,
  getVehiculosCtrl,
  postVehiculoCtrl,
  updateVehiculoCtrl,
};
