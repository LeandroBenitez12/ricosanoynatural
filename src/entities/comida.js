export class Comida {
  tipo; // DM AC
  descripcion;
  ingredientes = [];
  porcentajeProteinas;

  getIngredientes() {
    return this.ingredientes;
  }

  getPorcentajesProteinas() {
    return this.porcentajeProteinas;
  }
}
