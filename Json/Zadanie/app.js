const przycisk = document.querySelector('#wczytaj');
const komunikat = document.querySelector('#komunikat');
const lista = document.querySelector('#lista');

async function pobierz(url) {
    const odpowiedz = await fetch(url);
    if (!odpowiedz.ok) {
        throw new Error('HTTP ' + odpowiedz.status);
    }
    return await odpowiedz.json();
}

function pokaz(dane) {
  const lista = document.querySelector("ul");
  lista.innerHTML = "";

  for (let i = 0; i < dane.length; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1) + ". " + dane[i].tytul;
    lista.append(li);
  }
}

async function start() {
  komunikat.textContent = 'Pobieranie...';
  try {
    const dane = await pobierz('./dane.json');
    pokaz(dane);
    komunikat.textContent = 'Wpisy: ' + dane.length;
  } catch (blad) {
    console.error(blad);
    komunikat.textContent = 'błąd pobierania';
  }
}

async function start() {
  komunikat.textContent = 'Pobieranie';
    try {
        const dane = await pobierz('./dane.json');
        pokaz(dane);
        komunikat.textContent = 'Wpisy: ' + dane.length;
    } catch (blad) {
        console.error(blad);
        komunikat.textContent = 'błąd pobierania';
    }
}

przycisk.addEventListener('click', start);
