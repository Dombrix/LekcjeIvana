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
            const tekst = document.createElement("Span");
            const btn = document.createElement("button");

            tekst.textContent = zadanie.tresc;
            btn.textContent = "Usuń";
            btn.type = "button";

            btn.addEventListener("click", () => {
                usun(zadanie.id);
            });

            li.append(tekst, btn); 
            lista.append(li);
        });
    }

    function usun(id) {
        zadania = zadania.filter((zadanie) => zadanie.id !== id);
        render();
    }

