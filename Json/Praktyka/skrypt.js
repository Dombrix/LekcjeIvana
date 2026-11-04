async function pobierz(url) {
    const odpowiedz = await fetch(url);
    if (!odpowiedz.ok) {
        throw new Error('HTTP ' + odpowiedz.status);
    }
    return await odpowiedz.json();
}

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
