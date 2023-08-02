import { VehiculoConLlegadaSalida } from "./vehiculo.interface";

export interface Categoria {
  nombre: String;
  vehiculo: Array<VehiculoConLlegadaSalida>;
  carrera: string;
}
