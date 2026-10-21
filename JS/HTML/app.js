console.log("Hello world");

const form = document.querySelector("#form");
const input = document.querySelector("#tresc");
const blad = document.querySelector("#blad");
const lista = document.querySelector("#lista");

console.log({form, input, blad, lista});

form.addEventListener("submit", (e) => {e.preventDefault();
    const tresc = input.value.trim();
    
    if(tresc === "") {
        blad.textContent = "Wpisz treść zadania!";
        input.focus();
        return;
    }

    blad.textContent = "";
    console.log("Poprawne dane: ", tresc);


    
    dodaj(tresc);
    form.reset();
});

    let zadania = [];

    function dodaj(tresc) {
        const noweZadanie = {
            id: Date.now(),
            tresc: tresc,
            
        };

    zadania.push(noweZadanie);
    console.log(zadania);
        render();
    }


    function render() {
        lista.textContent = "";

        zadania.forEach((zadanie) => {
            const li = document.createElement("li");
            li.textContent = zadanie.tresc;
            lista.append(li);
        });
    }

