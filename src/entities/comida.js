export class Comida {
  tipo; // DM AC
  descripcion;
  ingredientes = [];
  porcentajesProteinas;

  getIngredientes() {
    return this.ingredientes;
  }

  getPorcentajesProteinas() {
    return this.porcentajesProteinas;
  }
  
}
