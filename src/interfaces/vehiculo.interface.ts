export interface Vehiculo {
  numero: number;
  placa: string;
  piloto: string;
  dniPiloto: number;
  coPiloto: string;
  dniCoPiloto: number;
  categoria: string;
  imagenUrl: string;
  carrera: string;
}

export interface VehiculoConLlegadaSalida extends Vehiculo {
  llegada: String;
  salida: String;
}
