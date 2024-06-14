export class Profesional {
    nombre;
    apellido;
    especialidad;
    matricula;
    constructor(nombre = null, apellido = null,especialidad = null, matricula = null){
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.matricula = matricula;
    }
}