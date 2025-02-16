import { type TableAsistanceHeadRecord } from "./types";
import { DEPARTAMENTOS, Prisma,  } from "@prisma/client";


export const headAsistanceTitle : TableAsistanceHeadRecord = {

    "firstName":"Primer Nombre",
    "middleName": "Segundo Nombre",
    "firstLastName": "Primer Apellido",
     "secondLastName": "Segundo Apellido",
    "idOrPassport": "Cedula o Pasaporte",
    "inDate" : "Hora Entrada", 
    "outDate": "Hora Salida"
}

export const titleDepartmentNameById : Record<DEPARTAMENTOS, string> = {

    OBRAS_EXTERIORES: "Obras Exteriores",
    ALMACEN: "Almacen",
    DOCUMENTACION: "DOCUMENTACION",
    PANETE_Y_VACIADO: "PAÑETE Y VACIADO"
}