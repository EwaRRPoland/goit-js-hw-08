//2
//przekonwertowuję ten ciąg z powrotem na obiekt JavaScript
const json = '{"name":"Mango","age":3,"isHappy":true}'
const mango = JSON.parse(json);

//Wydrukowuję otrzymany obiekt w konsoli, aby potwierdzić, czy proces konwersji był poprawny.
console.log(mango);

//Weryfikuję, czy właściwości otrzymanego obiektu odpowiadają oryginalnemu ciągowi JSON.
//Na początek zamieniam tu user.jsno na obiekt (będę potrzebowała zamienić go na string)
const user =
{
    name: "Josh",
    weight: 175,
    age: 30,
    eyecolor: "brown",
    isHappy: true,
    cars: ["Chevy", "Honda"],
    favoriteBook: {
        title: "Thae Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38
    }
}
//wypisuję go w konsoli
console.log(user);
// teraz go zamieniam na string
const userJson = JSON.stringify(user);
//sprawszam w konsoli zamianę
console.log(userJson);
//sprawdzam czy te dwa stringi są jednakowe

if (userJson === json) {
    console.log("Stringi userJson i json są takie same!");
} else {
    console.log("Stringi userJson i json są różne.");
}


//2.
//Przeprowadzam próbę parsowania nieprawidłowego ciągu JSON.
const json2 = '{name:"Mango","age":3,"isHappy":true, "eyecolor": "brown"}';
let mango2 
try {
    //powinien wykonać się bez błędów
    mango2 = JSON.parse(json2);
} catch (error) {
    //Wyświetlam szczegóły błędu, włączając w to rodzaj błędu (name) oraz wiadomość (message).
    console.error(error.name);
    console.error(error.message);
    // jeśli wyłapie błąd , chcę aby wyświetlił pusty obiekt
    mango2 = '{"name":"","age":,"isHappy":, "eyecolor": ""}';
}
//sprawdzam co mi się wpisało
console.log(mango2);

//tworzę też testowy log aby sprawdzić czy mam obsługe błędu i czy kod poszedł dalej (błęd nie zatrzymał kodu)
console.log("Blad został obsłuzony i nie zatrzymal kodu.");
