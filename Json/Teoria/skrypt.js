//skrypt 1
const tekst = '{"id": 1, "tytul": "Awaria"}';

const wpis = JSON.parse(tekst);
console.log(wpis.tytul);

console.log(JSON.stringify(wpis));


//skrypt 2
async function uruchom() {
    console.log('1. Start');
    const odpowiedz = await fetch('./dane.json');
    console.log('3. Odpowiedź:', odpowiedz.status);
}
uruchom().catch(console.error);
console.log('2. Dalszy kod');

//skrypt 3
async function pobierz(url) {
    const odpowiedz = await fetch(url);
    if (!odpowiedz.ok) {
        throw new Error('HTTP ' + odpowiedz.status);
    }
    return await odpowiedz.json();
}

//skrypt 4
async function start() {
    try {
        const dane = await pobierz('./dane.json');
        komunikat.textContent = 'Wpisy: ' + dane.length;
    } catch (blad) {
        console.error(blad);
        komunikat.textContent = 'błąd pobierania';
    }
}

start();

//skrypt 5