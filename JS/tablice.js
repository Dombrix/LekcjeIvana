//zadanie 1 Tablice - Push
const zadania = ["JS", 'React'];

zadania.push('node');
const ostatnie = zadania.pop();

console.log(zadania.includes("JS"));
console.log(zadania.indexOf('Reakt'));
console.log(zadania[0]);
console.log(zadania.at(-1));

//zadanie 2
const owoce = ['jablko', 'banan']
const dlugosc = owoce.push('gruszka', "śliwka");

console.log(owoce);
console.log(dlugosc);

//zadanie 3 - POP
const kolejka = ["Ala", "Ola", "Ula"];
const usunięty = kolejka.pop();

console.log(kolejka);
console.log(usunięty);

//zadanie 4
const liczby = [3,4];
const dlugosc2 = liczby.unshift(1,2);

console.log(liczby);
console.log(dlugosc2);

//zadanie 5 - splice
const kolory = ['czerwony', 'zielony', 'niebieski'];
const usuniecie = kolory.splice(1,1, 'żółty', 'bialy');

console.log(kolory);
console.log(usuniecie);

//zadanie 6
const liczby2 = [20,5,123,12];

liczby2.sort((a, b) => a - b);
console.log(liczby);

liczby2.sort((a, b) => b - a);

//zadanie 7
const litery = ['a', 'b', 'c', 'd'];
const fragmenty = litery.slice(1, 3);

console.log(fragmenty);
console.log(litery);
const kopia = litery.slice();

//zadanie 8
const cenyNetto = [10, 20, 50];

const cenyBrutto = cenyNetto.map(cena => cena * 1.23);
console.log(cenyBrutto);
console.log(cenyNetto);

//zadanie 9
const produkty = [
  {nazwa: 'Mysz', cena: 80},
  {nazwa: 'pad', cena: 150},
  {nazwa: "Kabel", cena: 30},
];

const tanie = produkty.filter(p => p.cena <= 100);

console.log(tanie.map(p => p.nazwa));

//zadanie 10
const produkt = produkty.find(p => p.id === 2);
console.log(produkt)

const wyniki = [42, 78, 35, 61];

const ktosZdal = wyniki.some(wynik => wynik >= 50);
const jestSetka = wyniki.some(wynik => wynik === 100);

console.log(ktosZdal);
console.log(jestSetka);

//zadanie 11
const ceny = [10, 25, 15];

const suma = ceny.reducex((akumulator, cena) => {return akumulator + cena;}, 0);

console.log(suma);
console.log(ceny);

//zadanie 12
const frontend = ['HTML', 'CSS'];
const programowanie = ['JavaScript', 'TypeScript'];

const technologie = frontend.concat(oprogramowanie, 'React');
console.log(technologie);
console.log(frontend);

//zadanie 13
const punkty = [20, 3, 100, 12];
const rosnaco = punkty.toSorted((a, b) => a - b);
console.log(rosnaco);
console.log(punkty);