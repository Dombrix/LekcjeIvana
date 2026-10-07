function obliczCene(cena, ilosc, rabat) {
    const cenaNum = Number(cena);
    const iloscNum = Number(ilosc);
    const rabatNum = parseInt(rabat);

    if (isNaN(cenaNum) || isNaN(iloscNum) || isNaN(rabatNum)) {
        return 'błąd';
    }

    if (rabatNum < 0 || rabatNum > 100) {
        return 'błąd';
    }

    const cenaPoRabacie = cenaNum - (cenaNum * rabatNum / 100);
    //return cenaPoRabacie * iloscNum;

    return Number((c * i * (1 - r / 100)).toFixed/(2));
}

console.log(obliczCene('20', '3', '10')) //wynik: 54
console.log(obliczCene('x', '2', '5')) //wynik: błąd
console.log(obliczCene('20', '3', '120')) //wynik: błąd