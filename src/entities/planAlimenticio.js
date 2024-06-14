export class PlanAlimenticio {
  duracion; // puede ser semanal quincenal o mensual
  pesoActual;
  medidaCintura;
  objetivos = []; // necesito saber si esta cumplido o no
  calificaciones = []; // %
  comidas = [];
  coleciones = [];
  bebidas = [];

  addObjetivo(obj) {
    this.objetivos.push(obj);
  }

  addComidas(comida) {
    this.comidas.push(comida);
  }

  getCalificacionFinalObjetivos() {
    let porcentajeFinal = 0;
    const objetivoCumplidos = this.objetivos.filter((o) => o.estado);
    porcentajeFinal = (objetivoCumplidos.length / this.objetivos.length) * 100;

    if (porcentajeFinal == 100) {
      return "Excelente";
    } else if (porcentajeFinal > 60) {
      return "Muy buena";
    } else if (porcentajeFinal >= 50 && porcentajeFinal <= 60) {
      return "Buena";
    } else {
      return "Regular";
    }
  }

  cantidadComidas() {
    return this.comidas.length;
  }

  cantidadPorTipoComida(tipoComida) {
    return this.comidas.filter((c) => c.tipo == tipoComida).length;
  }

  esFuerteEnProteinas() {
    let esProteica = false;

    const comidaAC = this.comidas.filter((c) => c.tipo == "AC");
    comidaAC.filter((cAC)=>c.)

    if (esProteica) {
      return "fuerte en proteinas";
    }
    return "no es fuerte";
  }

  esBienVerdeElPlan() {
    let esBienVerde = false;

    const comidaAC = this.comidas.filter((c) => c.tipo == "AC");
    esBienVerde = comidaAC.every((cP) => cP. >= 50);

    if (esBienVerde) {
      return "fuerte en proteinas";
    }
    return "no es fuerte";
  }
}
