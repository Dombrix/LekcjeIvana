const tekst = '{"id": 1, "tytul": "Awaria"}';

const wpis = JSON.parse(tekst);
console.log(wpis.tytul);

console.log(JSON.stringify(wpis));

async function uruchom() {
    console.log('1. Start');
    const odpowiedz = await fetch('./dane.json');
    console.log('3. Odpowiedź:', odpowiedz.status);
}
uruchom().catch(console.error);
console.log('2. Dalszy kod');