import { Schema, model } from "mongoose";
import { Vehiculo } from "../interfaces/vehiculo.interface";

const VehiculoSchema = new Schema<Vehiculo>({
  numero: { type: Number, required: true },
  placa: { type: String, required: true },
  piloto: { type: String, required: true },
  dniPiloto: { type: Number, required: true },
  coPiloto: { type: String, required: true },
  dniCoPiloto: { type: Number, required: true },
  categoria: { type: String, required: true },
  imagenUrl: { type: String, required: true },
});

const VehiculoModel = model("vehiculo", VehiculoSchema);

export default VehiculoModel;
