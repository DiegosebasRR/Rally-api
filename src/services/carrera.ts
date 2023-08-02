import CarreraModel from "../models/carrera";
import { Carrera } from "../interfaces/carrera.interface";

const createCarrera = async (data: Carrera) => {
  const responseCreate = await CarreraModel.create(data);
  return responseCreate;
};

const getCarreras = async () => {
  const responseGet = await CarreraModel.find({})
    .populate("vehiculo")
    .populate("categoria");
  return responseGet;
};

const getCarrera = async (id: string) => {
  const responseGet = await CarreraModel.findOne({ _id: id })
    .populate("vehiculo")
    .populate("categoria");
  return responseGet;
};

const updateCarrera = async (id: string, data: Carrera) => {
  const responseUpdate = await CarreraModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return responseUpdate;
};

const deleteCarrera = async (id: string) => {
  const responseDelete = await CarreraModel.deleteOne({ _id: id });
  return responseDelete;
};

export { createCarrera, getCarrera, getCarreras, updateCarrera, deleteCarrera };
