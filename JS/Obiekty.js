const produkt = {
  nazwa: "klawiatura",
  cena: 129.99,

  etykieta(){
    return `${this.nazwa} - ${this.cena} zł`;
  },

  ustawCene(nowaCena){
    if (nowaCena > 0) {
      this.cena = nowaCena;
      return true;
    }
    return false;
  }
};

produkt.nazwa;
produkt['cena'];
produkt.etykieta();
produkt.ustawCene(99);

console.log(produkt.nazwa);
console.log(produkt['cena']);
console.log(produkt.etykieta());
console.log(produkt.ustawCene());


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

//zadanie 4
const produkt3 = {id: 1, nazwa: 'mysz', cena: 80};
const {nazwa, cena} = produkt;

const taniej = {...produkt, cena: 70};

const koszyk = [produkt];
const nowyKoszyk = [...koszyk, {id:2, nazwa: 'pad'}];

function pokaz({nazwa, cena = 0}) {
  return `${nazwa}: ${cena} zł`;
}

//zadanie 5
const produkt4 = {
  id: 7,
  nazwa: 'Mysz',
  producent: {kraj: 'PL'}
};

const {cena: cenaProdukt} = produkt;
const {nazwa: tytul} = produkt;
const {cena: cenaZDomyslna = 0} = produkt;
const {producent: {kraj}} = produkt4;
const {id, ...pozostale} = produkt;

const kolory = ['red', 'green', 'blue'];
const [pierwszy, , trzeci] = kolory;

function pokazProdukt({nazwa, cena = 0, dostepny = false})
{
  const status = dostepny ? 'dostępny' : 'brak';
  return `${nazwa}: ${cena} zł (${status})`;
}

const produkt5 = {
  nazwa: 'Mysz',
  cena: 80,
  dostepny: true,
  magazyn: 12
};

pokazProdukt(produkt5);

//zadanie 6
const bazowy = {nazwa: 'Mysz', cena: 80};
const promocja = {...bazowy, cena: 60};

const zlaKolejnosc = {cena: 60, ...bazowy};

const dane = {id: 1, nazwa: 'Pad'};
const ustawienia = {dostepny: true, cena: 150};
const produkt6 = {...dane, ...ustawienia};

let a = [1, 2];
const b = [...a, 3];

//zadanie 7
const a1 = {punkty: 10};
const b1 = a;
b.punkty = 99;
console.log(a1.punkty);

const c = {...a1};
console.log(c.punkty);

const x = {uczen: {imie: 'Ala'}};
const y = {...x};
y.uczen.imie = 'Ola';
console.log(x.uczen.imie);

const a2 = {punkty: 10};
const b2 = a2;
const c2 = {punkty: 10};
const d2 = {...a2};

console.log(a2 === b2);
console.log(a2 === c2);
console.log(a2 === d2);

b2.punkty = 50;
console.log(a2.punkty);

a2 = {};

//zadanie 8
const oryginal = {
  nazwa: 'Ala',
  adres: {miasto: 'Gdańsk'},
  tagi: ['JS', 'HTML'],
};

const plytka = {...oryginal};
plytka.adres.miasto = 'Poznań';
console.log(oryginal.adres.miasto);

const bezpiecznaAktualizacja = {
  ...oryginal,
  adres: {...oryginal.adres, Miasto: 'Kraków'},
};

const gleboka = structuredClone(oryginal);
gleboka.tagi.push('CSS');