var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto(marca, modello) {
        this.marca = "Ford";
        this.modelo = "Mustang";
        this.marca = marca;
        this.modelo = modello;
    }
    Auto.prototype.mostradettagliAuto = function () {
        console.log("Marca: ".concat(this.marca, ", Modello: ").concat(auto.modelo));
    };
    return Auto;
}());
var auto = new Auto("fiat", "punto");
//auto.costruttore("pip", "kk");
auto.mostradettagliAuto();
console.log(auto.marca); // Fiat
// //Access modifier
// class Animale {
//   private nome: string;
//   constructor(nome: string) {
//     this.nome = nome;
//   }
// }
// class Gatto extends Animale {
//   constructor() {
//     super("Gatto"); //prende il costruttore della classe padre
//   }
//   get nome() {
//     // getter per accedere al nome del gatto}
//     return "il gatto si chiama " + super.nome; // getter per accedere al nome del gatto
//   }
// }
// let animale = new Animale("Cane");
// let gatto = new Gatto();
// // console.log(gatto.nome); // da errore perche nome è privato
// // console.log(animale.nome); // da errore perche nome è privato
// SE INVECE FACCIO QUESTO....
//Access modifier
var Animale2 = /** @class */ (function () {
    function Animale2(nome) {
        this.xnome = nome;
    }
    Object.defineProperty(Animale2.prototype, "nome", {
        get: function () {
            return this.xnome;
        },
        enumerable: false,
        configurable: true
    });
    return Animale2;
}());
var Gatto2 = /** @class */ (function (_super) {
    __extends(Gatto2, _super);
    function Gatto2() {
        return _super.call(this, "Gatto2") || this; //prende il costruttore della classe padre
    }
    Object.defineProperty(Gatto2.prototype, "nome", {
        get: function () {
            // getter per accedere al nome del gatto}
            return "il gatto si chiama " + _super.prototype.nome; // getter per accedere al nome del gatto
        },
        enumerable: false,
        configurable: true
    });
    return Gatto2;
}(Animale2));
var animale4 = new Animale2("Cane");
var gatto4 = new Gatto2();
console.log(gatto4.nome); // NON da errore perche nome3 NON è privato
console.log(animale4.nome); // NON da errore perche nome2 NON è privato
