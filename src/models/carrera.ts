import { Schema, model } from "mongoose";
import { Carrera } from "../interfaces/carrera.interface";

const CarreraSchema = new Schema<Carrera>({
  name: { type: String, required: true },
  categoria: [{ type: Schema.Types.ObjectId, ref: "categoria" }],
  vehiculo: [{ type: Schema.Types.ObjectId, ref: "vehiculo" }],
});

const CarreraModel = model("carrera", CarreraSchema);

export default CarreraModel;
