import { Egreso } from "./egreso.model";
export class EgresoServicio{
    egreso:Egreso[]=[
        new Egreso("resta Depto",900),
        new Egreso("ropa",200)
    ];

    eliminar(egreso:Egreso){
        const indice: number= this.egreso.indexOf(egreso);
        this.egreso.splice(indice,1);
    }
}