const produkt = {
  id: 7,
  nazwa: "klawiatura",
  cena: 129.99,
  dostepny: true,
  etykieta(){
    return `${this.nazwa} - ${this.cena} zł`;
  }
};

produkt.nazwa;
produkt['cena'];
produkt.etykieta();

console.log(produkt.nazwa);
console.log(produkt['cena']);
console.log(produkt.etykieta());


//zadanie 2
const uczen = {
  imie: 'Ala',
  punkty: 72,
  aktywny: true
};

uczen.punkty;
uczen['punkty'];

const pole = 'punkty';
uczen[pole];

uczen.punkty = 80;
uczen.klasa = "STP";
delete uczen.aktywny;

console.log(uczen.punkty);
console.log(uczen['punkty']);
console.log(uczen[pole]);

//zadanie 3
const produkt2 = {nazwa: 'mysz', cena: 80};

Object.keys(produkt2);

Object.values(produkt2);

Object.entries(produkt2);

for (const [klucz, wartosc] of Object.entries(produkt2)){
  console.log(`${klucz}: ${wartosc}`);
}