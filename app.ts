class Auto {
  marca = "Ford";
  modelo = "Mustang";

  constructor(marca: string, modello: string) {
    this.marca = marca;
    this.modelo = modello;
  }

  mostradettagliAuto(): void {
    console.log(`Marca: ${this.marca}, Modello: ${auto.modelo}`);
  }
}

const auto = new Auto("fiat", "punto");
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

// // SE INVECE FACCIO QUESTO....
// //Access modifier
// class Animale2 {
//   private xnome: string;

//   constructor(nome: string) {
//     this.xnome = nome;
//   }
//   get nome() {
//     return this.xnome;
//   }
// }
// class Gatto2 extends Animale2 {
//   constructor() {
//     super("Gatto2"); //prende il costruttore della classe padre
//   }
//   get nome() {
//     // getter per accedere al nome del gatto}
//     return "il gatto si chiama " + super.nome; // getter per accedere al nome del gatto
//   }
// }
// let animale4 = new Animale2("Cane");
// let gatto4 = new Gatto2();

// console.log(gatto4.nome); // NON da errore perche nome3 NON è privato
// console.log(animale4.nome); // NON da errore perche nome2 NON è privato

class Animale {
  protected nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}
class Gatto extends Animale {
  constructor() {
    super("Gatto"); //prende il costruttore della classe padre
  }
  getNome() {
    // getter per accedere al nome del gatto
    return "il gatto si chiama " + this.nome; // getter per accedere al nome del gatto
  }
}
let animale = new Animale("Cane");
let gatto = new Gatto();
console.log(animale.nome); // da errore perche il metodo getNome fa riferimento ad una propr PROTECTED della classe madre
console.log(gatto.getNome()); // NON da errore perche il metodo getNome fa riferimento ad una propr PROTECTED della classe madre
