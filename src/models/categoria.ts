import { Schema, model } from "mongoose";
import { Categoria } from "../interfaces/categoria.interface";

const CategoriaSchema = new Schema<Categoria>({
  nombre: { type: String, required: true },
  carrera: { type: String, required: true },
  vehiculo: [{ type: Array }],
});

const CategoriaModel = model("categoria", CategoriaSchema);

export default CategoriaModel;
