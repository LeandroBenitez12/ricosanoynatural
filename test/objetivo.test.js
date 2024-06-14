import { PlanAlimenticio } from "../src/entities/planAlimenticio.js";
import { Objetivo } from "../src/entities/objetivo.js";

let objetivo1;
let objetivo2;
let objetivo3;
let objetivo4;
let planAlimLeandro;

beforeEach(() => {
  objetivo1 = new Objetivo("Comer 2000Calorias", true);
  objetivo2 = new Objetivo("Hacer Cardio", false);
  objetivo3 = new Objetivo("Comer 5000Calorias", true);
  objetivo4 = new Objetivo("No Hacer Cardio", false);

  planAlimLeandro = new PlanAlimenticio();
});
test("Se completo el 100% de objetivos, Excelente", () => {
  planAlimLeandro.addObjetivo(objetivo1);
  planAlimLeandro.addObjetivo(objetivo2);

  let resultado = planAlimLeandro.getCalificacionFinalObjetivos();

  expect(resultado).toBe("Buena");
});

test("Se completo el 50% de objetivos, Buena", () => {
  planAlimLeandro.addObjetivo(objetivo1);
  planAlimLeandro.addObjetivo(objetivo2);

  let resultado = planAlimLeandro.getCalificacionFinalObjetivos();

  expect(resultado).toBe("Buena");
});

test("Se completo el 66.6% de los objetivos, Muy Buena", () => {
  planAlimLeandro.addObjetivo(objetivo1);
  planAlimLeandro.addObjetivo(objetivo2);
  planAlimLeandro.addObjetivo(objetivo3);

  let resultado = planAlimLeandro.getCalificacionFinalObjetivos();

  expect(resultado).toBe("Muy buena");
});

test("Se completo el 30% de objetivos, Regular", () => {
  planAlimLeandro.addObjetivo(objetivo1);
  planAlimLeandro.addObjetivo(objetivo2);
  planAlimLeandro.addObjetivo(objetivo4);
  let resultado = planAlimLeandro.getCalificacionFinalObjetivos();

  expect(resultado).toBe("Regular");
});
