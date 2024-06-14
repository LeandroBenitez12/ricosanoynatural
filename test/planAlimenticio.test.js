import { PlanAlimenticio } from "../src/entities/planAlimenticio";
import { Comida } from "../src/entities/comida";

let myPlan;
let ommelet;
let arrozConPollo;

beforeEach(() => {
  myPlan = new PlanAlimenticio();
  ommelet = new Comida();
  arrozConPollo = new Comida();
});

test("Tengo un plan fuerte en proteinas", () => {
  ommelet.porcentajeProteinas = 70;
  arrozConPollo.porcentajeProteinas = 90;
  ommelet.tipo = "AC";
  arrozConPollo.tipo = "AC";
  myPlan.addComidas(ommelet);
  myPlan.addComidas(arrozConPollo);

  expect(myPlan.esFuerteEnProteinas()).toBe("fuerte en proteinas");
});
