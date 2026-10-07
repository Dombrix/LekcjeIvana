function podsumuj(wyniki) {
    if(wyniki.length === 0) {
        return 'Brak wyników';
    }

    //suma
    let suma = 0;

    for (let i = 0; i < wyniki.length; i++) {
        suma += wyniki[i];
    }

    //średnia
    let srednia = suma / wyniki.length;

    let min = wyniki[0];
    let max = wyniki[0];

    for (let i = 1; i < wyniki.length; i++) {
        if (wyniki[i] < min) {
            min = wyniki[i];
        }
        if (wyniki[i] > max) {
            max = wyniki[i];
        }
    }

    //wynik
    let wynik;

    if (srednia > 50) {
        wynik = 'Zdane';
    } else if (srednia < 50) {
        wynik = 'Nie Zdane';
    } else {
        wynik = 'Wystarczy';
    }

    return wynik + " suma: " + suma + ", średnia: " + srednia + ", min: " + min + ", max: " + max;
}

console.log(podsumuj([40, 70, 55]));