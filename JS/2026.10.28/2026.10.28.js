class Produkt {
    constructor(nazwa, cena) {
        this.nazwa = nazwa;
        this.cena = cena;
    }
    opis() {
        return this.nazwa + ': ' + this.cena;
    }
}
const mysz = new Produkt('Mysz', 80);
console.log(mysz.opis());

//

class Licznik {
    #wartosc = 0; // # to private
    zwieksz() {
        this.#wartosc++;
    }
    zmniejsz() {
        this.#wartosc--;
    }
    odczytaj() {
        return this.#wartosc;
    }
}
const licznik = new Licznik();
licznik.zwieksz();
console.log(licznik.odczytaj());
licznik.zwieksz();
console.log(licznik.odczytaj());
licznik.zmniejsz();
console.log(licznik.odczytaj());

//

class Zgloszenie {
    opis() { return 'Zwykłe'; }
}
class Pilne extends Zgloszenie {
    opis() { return 'Pilne'; }
}
const dane = [new Zgloszenie(), new Pilne()];
for (const wpis of dane) {
    console.log(wpis.opis())
}

//

class Walidator {
    static sprawdz(liczba) {
        if(!Number.isFinite(liczba)) {
            throw new Error("Podaj liczbę");
        }
        return liczba;
    }
}
try {
    Walidator.sprawdz(Number('abc'));
}
    catch (blad) {
        console.log(blad.message);
    }

//

class Wynik {
    constructor(wynik) {
        this.wynik = wynik;
    }
    czyZdane() {
        if (this.wynik >= 50) {
            return 'Zdane';
        } else {
            return 'Nie zdane'
        }
    }
}
    const a = new Wynik(60);
    const b = new Wynik(40);

console.log(a.czyZdane());
console.log(b.czyZdane());

//