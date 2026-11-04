# Lista zgłoszeń z pliku JSON

JavaScript - zadanie po slajdach 1-67. Czas: 45 minut. Praca indywidualna.

## Twoje zadanie

Uzupełnij prostą aplikację, która po kliknięciu „Wczytaj zgłoszenia” pobierze
dane z pliku JSON i pokaże listę zgłoszeń. HTML jest przygotowany.
Pracujesz w plikach `app.js`, `dane.json` i `raport.md` w folderze ucznia.

## Uruchomienie

Otwórz terminal w folderze z index.html i uruchom:

```powershell
python -m http.server 8000
```

Otwórz http://127.0.0.1:8000/. Pozostaw serwer uruchomiony.
Po zmianach zapisuj pliki i odświeżaj stronę przez Ctrl+F5.

## Wymagania

1. W dane.json zapisz tablicę trzech obiektów z polami id i tytul, według danych poniżej.
2. Uzupełnij `pobierz(url)`: użyj fetch i await, sprawdź odpowiedz.ok.
   Przy błędzie HTTP zgłoś Error ze statusem. Zwróć dane odczytane przez json().
3. Uzupełnij `pokaz(dane)`: wyczyść listę, przejdź po danych w pętli i utwórz po jednym li.
   Wpis ma postać „1. Awaria komputera”. Użyj textContent i append.
4. Uzupełnij `start()`: przed pobraniem pokaż „Pobieranie”, po sukcesie „Wpisy: 3”.
5. W catch wypisz błąd w Console, wyczyść listę i pokaż „Błąd pobierania”.
6. Ponowne wczytanie poprawnych danych ma pozostawić trzy pozycje, bez duplikatów.

```json
[
  {"id": 1, "tytul": "Awaria komputera"},
  {"id": 2, "tytul": "Brak papieru"},
  {"id": 3, "tytul": "Problem z monitorem"}
]
```

## Próby i raport

Po każdej zmianie naciśnij „Wczytaj zgłoszenia”. Zapisz rzeczywiste wyniki w raport.md.

| ID | Co zrobić | Oczekiwany wynik |
| --- | --- | --- |
| T1 | Wczytaj poprawny plik | 3 pozycje i „Wpisy: 3” |
| T2 | Zmień nazwę dane.json na dane_kopia.json | Pusta lista i „Błąd pobierania” |
| T3 | Przywróć nazwę; usuń przecinek po pierwszym obiekcie | Pusta lista i „Błąd pobierania” |
| T4 | Przywróć poprawny JSON; wczytaj dwa razy, czekając na koniec każdej próby | Nadal 3 pozycje |

W F12 sprawdź Console i Network. Dla T2 zapisz status HTTP.
Dla T3 zapisz status HTTP i rodzaj błędu. Krótko wyjaśnij różnicę między T2 i T3.
Dołącz zrzuty T1, T2 i T3. Przed oddaniem przywróć poprawny JSON i jego nazwę.

## Co oddajesz

Folder nazwany `nazwisko_klasa_json`, zawierający index.html, app.js, dane.json,
raport.md i trzy zrzuty ekranu. Pliki muszą uruchamiać się przez HTTP.

## Punktacja - 10 punktów

- Poprawne dane JSON: 2 pkt.
- Pobranie przez fetch, await, kontrola HTTP i json(): 3 pkt.
- Lista, textContent, poprawna liczba i brak duplikatów: 2 pkt.
- Komunikat oczekiwania oraz obsługa błędu: 1 pkt.
- Wykonane próby, raport z przyczynami i zrzuty: 2 pkt.

Zadanie ćwiczy wybrane umiejętności INF.04.

