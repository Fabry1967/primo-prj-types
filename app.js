function somma(uu, b) {
    return uu + b;
}
console.log(somma(1, 2));
console.log(somma(1, 2));
console.log(somma(1, 2));
console.log(somma(3, 2));
console.log(somma(1, 2));
console.log(somma(1, 2));
var isCompleted;
isCompleted = true;
console.log("è stato completato:", isCompleted);
var decimal = 10;
var hex = 0xf;
var binary = 4;
console.log("kjkjkjk:", binary);
var color = "bianco";
var cosa = "manuel";
var pippo = "ciao mi chiamo " + cosa + " e sono di colore " + color;
console.log("jjjjj ${pippo}");
var pippo2 = ["ciao mi chiamo ", "kk", "ooooo"];
console.table(pippo2.join(", "));
var devices = [
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
var persona = ["Mario", 30];
console.log("Nome:", persona[0]);
console.log("Età:", persona[1]);
//enum
var Colore;
(function (Colore) {
    Colore[Colore["bianco"] = 0] = "bianco";
    Colore[Colore["nero"] = 1] = "nero";
    Colore[Colore["blu"] = 2] = "blu";
})(Colore || (Colore = {}));
var colorePreferito = Colore.bianco;
console.log("Colore preferito:", colorePreferito);
console.log("Colore preferito:", Colore[0]);
console.log("Colore preferito:", Colore[1]);
console.log("Colore preferito:", Colore[2]);
//Any
var valorecasuale = 100;
var dd = ["ciao", "pippo", "pluto"];
valorecasuale = dd[0];
console.log("valorecasuale:", valorecasuale);
//void
function saluta(nome, cognome) {
    console.log("Ciao ".concat(nome, " ").concat(cognome));
}
saluta("hhh", "jjj");
//null e undefined
var u = null;
var v = undefined;
console.log("u:", u);
console.log("v:", v);
var misto = "ciao";
misto = 100;
console.log("misto:", misto);
misto = null;
console.log("misto:", misto);
misto = "jj";
console.log("misto:", misto);
//type aliasies
var plyt;
var employee1 = {
    nome: "Mario",
    cognome: "Rossi",
    etax: 30,
    id: 1,
    nome2: "Mario",
};
plyt = employee1;
console.log("plyt:", plyt);
var clickevent = "click";
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
var Uccello = /** @class */ (function () {
    function Uccello() {
    }
    Uccello.prototype.vola = function () {
        console.log("vola");
    };
    return Uccello;
}());
var Pesce = /** @class */ (function () {
    function Pesce() {
    }
    Pesce.prototype.nuota = function () {
        console.log("nuota");
    };
    return Pesce;
}());
function muoviAnimale(animale) {
    if (animale instanceof Uccello) {
        animale.vola();
    }
    else {
        animale.nuota();
    }
}
//nullable e undefined
var x = 6;
function d(x) {
    if (x === null) {
        return 0;
    }
    else {
        return x * 2;
    }
}
console.log("d:", d(x));
//type assertion
var userInput = document.getElementById("user-Input");
if (userInput) {
    userInput.min = "2";
}
//let pippo3 = getUserData() as User;
//pippo3.cognome = "Rossi";
//generics da vedere poi
//FUNZIONI+++++++++++++++
function saluta4(nome, cognome) {
    return "Ciao ".concat(nome, " ").concat(cognome);
}
console.log(saluta4("Mario"));
saluta4("Mario", "Rossi");
