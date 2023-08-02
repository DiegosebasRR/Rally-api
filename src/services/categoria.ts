import CategoriaModel from "../models/categoria";
import { Categoria } from "../interfaces/categoria.interface";
import CarreraModel from "../models/carrera";

const createCategoria = async (data: Categoria) => {
  const responseCreate = await CategoriaModel.create(data);
  console.log("carrera:" + data.carrera);

  const carrera = await CarreraModel.findById(data.carrera);
  if (carrera) {
    carrera.categoria.push(responseCreate._id);
    await carrera.save();
  } else {
    console.log(`El cuestionario no fue encontrado.`);
  }
  return responseCreate;
};

const getCategorias = async () => {
  const responseGet = await CategoriaModel.find({}).populate("vehiculo");
  return responseGet;
};

const getCategoria = async (id: string) => {
  const responseGet = await CategoriaModel.findOne({ _id: id }).populate(
    "vehiculo"
  );
  return responseGet;
};

const updateCategoria = async (id: string, data: Categoria) => {
  const responseUpdate = await CategoriaModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return responseUpdate;
};

const deleteCategoria = async (id: string) => {
  const responseDelete = await CategoriaModel.deleteOne({ _id: id });
  return responseDelete;
};

export {
  createCategoria,
  getCategoria,
  getCategorias,
  updateCategoria,
  deleteCategoria,
};
