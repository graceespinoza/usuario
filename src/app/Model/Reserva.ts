 import { Usuarios } from "./Usuarios";
 import { Inmueble } from "./Inmueble";
export interface Reserva{

    id_reserva:number,
    tipo:string,
    estado:string,
    hora: string,
    fecha:Date,
    inmueble: Inmueble,
    usuarios: Usuarios

}