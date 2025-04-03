function somma(uu, b) {
    return uu + b;
}
console.log(somma(1, 2));
console.log(somma(1, 2));
console.log(somma(1, 2));
console.log(somma(3, 2));
console.log(somma(1, 2));
console.log(somma(1, 2));
let isCompleted;
isCompleted = true;
console.log("è stato completato:", isCompleted);
let decimal = 10;
let hex = 0xf;
let binary = 0b100;
console.log("kjkjkjk:", binary);
let color = "bianco";
let cosa = "manuel";
let pippo = "ciao mi chiamo " + cosa + " e sono di colore " + color;
console.log("jjjjj ${pippo}");
let pippo2 = ["ciao mi chiamo ", "kk", "ooooo"];
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
let persona = ["Mario", 30];
console.log("Nome:", persona[0]);
console.log("Età:", persona[1]);
//enum
var Colore;
(function (Colore) {
    Colore[Colore["bianco"] = 0] = "bianco";
    Colore[Colore["nero"] = 1] = "nero";
    Colore[Colore["blu"] = 2] = "blu";
})(Colore || (Colore = {}));
let colorePreferito = Colore.bianco;
console.log("Colore preferito:", colorePreferito);
console.log("Colore preferito:", Colore[0]);
console.log("Colore preferito:", Colore[1]);
console.log("Colore preferito:", Colore[2]);
//Any
let valorecasuale = 100;
let dd = ["ciao", "pippo", "pluto"];
valorecasuale = dd[0];
console.log("valorecasuale:", valorecasuale);
//void
function saluta(nome, cognome) {
    console.log(`Ciao ${nome} ${cognome}`);
}
saluta("hhh", "jjj");
//null e undefined
let u = null;
let v = undefined;
console.log("u:", u);
console.log("v:", v);
let misto = "ciao";
misto = 100;
console.log("misto:", misto);
misto = null;
console.log("misto:", misto);
misto = "jj";
console.log("misto:", misto);
//type aliasies
let plyt;
let employee1 = {
    nome: "Mario",
    cognome: "Rossi",
    etax: 30,
    id: 1,
    nome2: "Mario",
};
plyt = employee1;
console.log("plyt:", plyt);
let clickevent = "click";
//type guard
function isnumber(value) {
    return typeof value === "number";
}
if (isnumber(100)) {
    console.log("è un numero");
}
function isString(value) {
    return typeof value === "string";
}
if (isString("ciao")) {
    console.log("è una stringa");
}
else {
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
function muoviAnimale(animale) {
    if (animale instanceof Uccello) {
        animale.vola();
    }
    else {
        animale.nuota();
    }
}
//nullable e undefined
let x = 6;
function d(x) {
    if (x === null) {
        return 0;
    }
    else {
        return x * 2;
    }
}
console.log("d:", d(x));
// generics da vedere poi
// FUNZIONI+++++++++++++++
function saluta4(nome, cognome) {
    return `Ciao ${nome} ${cognome}`;
}
console.log(saluta4("Mario"));
saluta4("Mario", "Rossi");
function somma2(a, b) {
    return a + b;
}
console.log(somma2(1, 2));
console.log(somma2("1", "2"));
//This nelle funzioni
class Counter {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count++; // sarebbe come un count=count+1
        //console.log(this.count);
    }
}
let counter = new Counter();
console.log(counter.count); // 0
counter.increment(); // 1
console.log(counter.count); //
// assegna una funzione ad una variabile
let miaFunzione;
miaFunzione = (numero, stringa) => {
    return numero > 5 && stringa.startsWith("c");
};
miaFunzione(10, "ciaolll");
console.log(miaFunzione(10, "ciao"));
//parametro rest
function somma3(capo, ...numeri) {
    return capo + numeri.join(", ");
}
let somma99 = somma3("ciao", "pippo", "pluto", "topolino", "paperino");
console.log(somma99);
