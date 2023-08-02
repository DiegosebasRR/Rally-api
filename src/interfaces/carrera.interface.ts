import { Types } from "mongoose";

export interface Carrera {
  name: string;
  categoria: Array<Types.ObjectId>;
  vehiculo: Array<Types.ObjectId>;
}
