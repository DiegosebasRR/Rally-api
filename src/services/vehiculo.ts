import VehiculoModel from "../models/vehiculo";
import { Vehiculo } from "../interfaces/vehiculo.interface";
import CarreraModel from "../models/carrera";

const createVehiculo = async (data: Vehiculo) => {
  const responseCreate = await VehiculoModel.create(data);
  console.log("carrera:" + data.carrera);

  const carrera = await CarreraModel.findById(data.carrera);
  if (carrera) {
    carrera.vehiculo.push(responseCreate._id);
    await carrera.save();
  } else {
    console.log(`El cuestionario no fue encontrado.`);
  }
  return responseCreate;
};

const getVehiculos = async () => {
  const responseGet = await VehiculoModel.find({});
  return responseGet;
};

const getVehiculo = async (id: string) => {
  const responseGet = await VehiculoModel.findOne({ _id: id }).populate("user");
  return responseGet;
};

const updateVehiculo = async (id: string, data: Vehiculo) => {
  const responseUpdate = await VehiculoModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return responseUpdate;
};

const deleteVehiculo = async (id: string) => {
  const responseDelete = await VehiculoModel.deleteOne({ _id: id });
  return responseDelete;
};

export {
  createVehiculo,
  getVehiculo,
  getVehiculos,
  updateVehiculo,
  deleteVehiculo,
};
