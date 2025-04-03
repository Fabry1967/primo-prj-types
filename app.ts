function somma(uu: number, b: number) {
  return uu + b;
}
console.log(somma(1, 2));
console.log(somma(1, 2));
console.log(somma(1, 2));
console.log(somma(3, 2));
console.log(somma(1, 2));
console.log(somma(1, 2));

let isCompleted: boolean;
isCompleted = true;
console.log("è stato completato:", isCompleted);

let decimal: number = 10;

let hex: number = 0xf;

let binary: number = 0b100;

console.log("kjkjkjk:", binary);
let color: string = "bianco";
let cosa: string = "manuel";
let pippo: string = "ciao mi chiamo " + cosa + " e sono di colore " + color;
console.log("jjjjj ${pippo}");

let pippo2: string[] = ["ciao mi chiamo ", "kk", "ooooo"];
console.table(pippo2.join(", "));
let devices = [
  {
    name: "iPhone",
    brand: "Apple",
  },
  {
    name: "Galaxy",
    brand: "Samsung",
  },
];

console.table(devices);
//tuple
let persona: [string, number] = ["Mario", 30];
console.log("Nome:", persona[0]);
console.log("Età:", persona[1]);

//enum
enum Colore {
  bianco,
  nero,
  blu,
}
let colorePreferito: Colore = Colore.bianco;
console.log("Colore preferito:", colorePreferito);
console.log("Colore preferito:", Colore[0]);
console.log("Colore preferito:", Colore[1]);
console.log("Colore preferito:", Colore[2]);

//Any
let valorecasuale: any = 100;
let dd: string[] = ["ciao", "pippo", "pluto"];
valorecasuale = dd[0];
console.log("valorecasuale:", valorecasuale);

//void
function saluta(nome: string, cognome: string): void {
  console.log(`Ciao ${nome} ${cognome}`);
}
saluta("hhh", "jjj");

//null e undefined
let u: null = null;
let v: undefined = undefined;
console.log("u:", u);
console.log("v:", v);

let misto: string | number | null | undefined = "ciao";
misto = 100;
console.log("misto:", misto);
misto = null;
console.log("misto:", misto);
misto = "jj";
console.log("misto:", misto);

interface Persona {
  nome: string;
  cognome?: string;
  etax?: number;
}
interface Cosa {
  id: number;
  nome2: string;
}

type pippo = Persona & Cosa;
//type aliasies
let plyt: pippo;
let employee1: pippo = {
  nome: "Mario",
  cognome: "Rossi",
  etax: 30,
  id: 1,
  nome2: "Mario",
};
plyt = employee1;
console.log("plyt:", plyt);

//type literal
type ClickEvent = "click" | "dblclick" | "mouseover";
let clickevent: ClickEvent = "click";

//type guard
function isnumber(value: any): value is number {
  return typeof value === "number";
}
if (isnumber(100)) {
  console.log("è un numero");
}
function isString(value: any): value is string {
  return typeof value === "string";
}
if (isString("ciao")) {
  console.log("è una stringa");
} else {
  console.log("è un numero", isnumber(100));
}

class Uccello {
  vola() {
    console.log("vola");
  }
}
class Pesce {
  nuota() {
    console.log("nuota");
  }
}
function muoviAnimale(animale: Uccello | Pesce) {
  if (animale instanceof Uccello) {
    animale.vola();
  } else {
    animale.nuota();
  }
}
//nullable e undefined
let x: null | number = 6;

function d(x: number | null): number {
  if (x === null) {
    return 0;
  } else {
    return x * 2;
  }
}
console.log("d:", d(x));

//type assertion
let userInput = document.getElementById("user-Input") as HTMLInputElement;
if (userInput) {
  userInput.min = "2";
}

interface User {
  name: string;
  cognome: string;
}

// generics da vedere poi

// FUNZIONI+++++++++++++++

function saluta4(nome: string, cognome?: string): string {
  return `Ciao ${nome} ${cognome}`;
}
console.log(saluta4("Mario"));
saluta4("Mario", "Rossi");
