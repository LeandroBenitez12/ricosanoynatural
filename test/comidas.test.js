import { Comida } from "../src/entities/comida.js";
import { PlanAlimenticio } from "../src/entities/planAlimenticio.js";
let arrozConHuevo;
let tostada;
let factura;
let planAlimenticioLeo;

beforeEach(() => {
  arrozConHuevo = new Comida();
  tostada = new Comida();
  factura = new Comida();

  tostada.tipo = "DM";
  factura.tipo = "DM";
  arrozConHuevo.tipo = "AC";
  planAlimenticioLeo = new PlanAlimenticio();
});

test("El Plan Alimenticio tiene 3 comidas", () => {
  planAlimenticioLeo.addComidas(arrozConHuevo);
  planAlimenticioLeo.addComidas(tostada);
  planAlimenticioLeo.addComidas(factura);

  let comidasDelPlan = planAlimenticioLeo.cantidadComidas();

  expect(comidasDelPlan).toBe(3);
});

test("El Plan Alimenticio tiene 2 comidas DM", () => {
  planAlimenticioLeo.addComidas(arrozConHuevo);
  planAlimenticioLeo.addComidas(tostada);
  planAlimenticioLeo.addComidas(factura);

  let comidasDelPlanXTipoDM = planAlimenticioLeo.cantidadPorTipoComida("DM");

  expect(comidasDelPlanXTipoDM).toBe(2);
});