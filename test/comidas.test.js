import { Comida } from "../src/entities/comida.js";
import { PlanAlimenticio } from "../src/entities/planAlimenticio.js";

test("El Plan Alimenticio tiene 3 comidas", () => {
  const arrozConHuevo = new Comida();
  const tostada = new Comida();
  const factura = new Comida();

  const planAlimenticioLeo = new PlanAlimenticio();

  planAlimenticioLeo.addComidas(arrozConHuevo);
  planAlimenticioLeo.addComidas(tostada);
  planAlimenticioLeo.addComidas(factura);

  let comidasDelPlan = planAlimenticioLeo.cantidadComidas();

  expect(comidasDelPlan).toBe(3);
});
