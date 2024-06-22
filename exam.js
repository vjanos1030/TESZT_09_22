/*
  JS Alapok - Modulzáró - 2024.06.22.

  Ez a fájl tartalmazza a modulzáró gyakorlati részének feladatait. A megoldásaidat kérlek ebben a fájlban helyezd el, de dolgozni dolgozhatsz külön fájlokban is.

  Néhány jótanács:
  - mindenképpen olvasd el figyelmesen a feladatokat, különösképpen a példában megadott teszteseteket!
  - a példákban a -> jelölés után vagy a függvény visszatérési értéke, vagy a függvény által kiírandó dolog szerepel
  - ha valamivel nagyon elakadtál, inkább menj tovább és térj vissza később
  - mielőtt feltöltenéd a megoldásaidat nézd át őket
  - győződj meg róla, hogy minden kód, amit le akartál írni le van írva, és amit nem akartál leírni az nincs :)
  - a megoldásokat alapvetően a kijelölt helyekre várjuk, de segédfüggvényeket és függvényen kívüli változókat bármikor létrehozhatsz
*/

// 1. Feladat - faktoriális

// Írj egy függvényt, ami visszaadja egy beadott, nemnegatív szám faktoriálisát!
// Faktoriális: egy szám faktoriálisa az összes olyan pozitív egész szám szorzatát jelenti, ami a számnál kisebb vagy azzal egyenlő
// Jelölése a matematikában: !
// pl.: 5 faktoriálisa: 5! = 1 * 2 * 3 * 4 * 5 = 120
// megegyezés alapján a 0! = 1
// pl.: factorial(5) -> 120
// pl.: factorial(0) -> 1
// pl.: factorial(3) -> 6
// pl.: factorial(-2) -> undefined

function factorial(num) {
  if (num < 0) {
    return undefined;
  }
  if (num === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(3)); // 6
console.log(factorial(-2)); // undefined

// 2. Feladat - FizzBuzz

// Írj egy függvényt, ami a kövektezőképpen működik:
// 1. A konzolra írja egy-től a paraméterként beadott pozitív egész számig a számokat egyesével
// 2. Ha a soron következő szám 3-mal osztható a szám helyett azt írja ki, hogy fizz
// 3. Ha a soron következő szám 5-tel osztható a szám helyett azt írja ki, hogy buzz
// 4. Ha a soron következő szám 3-mal és 5-tel is osztható a szám helyett azt írja ki, hogy fizzbuzz
// pl.: fizzbuzz(20) -> 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16, 17, fizz, 19, buzz

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(20);

// 3. Feladat - Unicum, csak pozitívan!

// Írj egy függvényt, ami egy egész számokat tartalmazó tömbből visszadja egy tömb formájában azokat a számokat, amelyek pozitívak!
// pl.: getPositives([1, 10, -3, 4, -156, 0, 3, 4]) -> [1, 10, 4, 3, 4]
// pl.: getPositives([-1, -2, -3]) -> []
// pl.: getPositives([3, 20, 54]) -> [3, 20, 54]

function getPositives(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(getPositives([1, 10, -3, 4, -156, 0, 3, 4])); // [1, 10, 4, 3, 4]
console.log(getPositives([-1, -2, -3])); // []
console.log(getPositives([3, 20, 54])); // [3, 20, 54]

// 4. Feladat - Perdülj, fordulj!

// Írj egy függvényt, ami a paraméterként megadott tömbjét valemlyik irányba "elforgatja"!
// Balra forgatás azt jelenti, hogy a tömb első eleme a tömb utolsó helyére kerül,
// jobbra forgatás esetén a tömb utolsó eleme kerül a tömb első helyére.
// A függvény a művelet végrehajtása után adja vissza a megváltoztatott tömböt, hibás irány esetén pedig az eredetit!
// pl.: rotate("left", [1, 2, 3]) -> [2, 3, 1]
// pl.: rotate("right", [1, 2, 3]) -> [3, 1, 2]
// pl.: rotate("hibás érték", [1, 2, 3]) -> [1, 2, 3]

function rotate(direction, arr) {
  if (direction !== "left" && direction !== "right") {
    return arr;
  }
  if (direction === "left") {
    let firstElement = arr.shift();
    arr.push(firstElement);
  }
  if (direction === "right") {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
  }

  return arr;
}

console.log(rotate("left", [1, 2, 3])); // [2, 3, 1]
console.log(rotate("right", [1, 2, 3])); // [3, 1, 2]
console.log(rotate("hibás érték", [1, 2, 3])); // [1, 2, 3]

// 5. Feladat - Nagy (Betűs) Szavak

// Írj egy függvényt, ami a paraméterként megadott mondatot olyan formában adja vissza, hogy annak minden szava nagybetűvel kezdődjön!
// pl.: capitalizeWords("Ha a győzelem gátja a gát, akkor fel kell robbantani.") -> "Ha A Győzelem Gátja A Gát, Akkor Fel Kell Robbantani."
// A feladathoz felhasználhatod a segítségként megadott isSeparator függvényt.

function isSeparator(c) {
  let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
  return separators.includes(c);
}

function capitalizeWords(text) {
  let result = "";
  let capitalize = true;

  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);

    if (capitalize && !isSeparator(char)) {
      result += char.toUpperCase();
      capitalize = false;
    } else {
      result += char;
      if (isSeparator(char)) {
        capitalize = true;
      }
    }
  }

  return result;
}

console.log(
  capitalizeWords("Ha a győzelem gátja a gát, akkor fel kell robbantani.")
); // "Ha A Győzelem Gátja A Gát, Akkor Fel Kell Robbantani."

// 6. Feladat - Felhasználók

// 1. Készíts egy felhasználókat tartalmazó adatbázist!
// 2. Minden felhasználónak van e-mail címe, jelszava, vezeték és keresztneve
// 3. A felhasználókat helyezd el egy tömbben!
// 4. Készíts egy bejelentkezés kezelésére szolgáló függvényt, ami a következőképpen működik
//    - Ha meghívjuk a függvényt, akkor a program a felhasználótól bekér egy e-mail címet
//    - Ha a felhasználó megadott egy e-mail címet, akkor egy másik ablakban bekér egy jelszót
//    - Ha a felhasználó helyes e-mail - jelszó kombinációt adott meg, egy ablakban írja ki a program, hogy sikeres a bejelentkezés
//    - Amennyiben valamelyik megadott adat nem stimmel írja ki, hogy a bejelentkezés sikertelen
// 5. Készíts egy felhasználó e-mail címét megváltoztatni képes függvényt!
//    - A függvénynek két paramétere legyen: a régi és az új e-mail cím
//    - Amennyiben létezik az adatbázisban a megadott e-mail címmel felhasználó változtassa meg az e-mail címét az újra
//    - Ha nincs ilyen e-mail című felhasználó írjon ki egy üzenetet erről
// 6. Készíts egy függvényt, ami létre tud hozni egy új felhasználót az adatbázisban!
//    - Paraméterek: e-mail cím, jelszó, jelszó megerősítése, vezeték és keresztnév
//    - Ha a jelszó és a jelszó megerősítése nem egyeznek meg írjon ki hibaüzenetet!
//    - Ha a megadott e-mail címmel már szerepel felhasználó az adatbázisban írjon ki hibaüzenetet!
//    - Egyébként készítsen el egy új felhasználót és helyezze el a felhasználókat tartalmazó tömbben!

// 1, 2, és 3-as feladat megoldása jöhetnek a komment alá

let users = [
  {
    email: "eddard.stark@example.com",
    password: "HeadlessMadness12",
    lastName: "Stark",
    firstName: "Eddard",
  },
  {
    email: "jaime.lannister@example.com",
    password: "LoveMySis",
    lastName: "Lannister",
    firstName: "Jaime",
  },
  {
    email: "tyrion.lannister@example.com",
    password: "LittleMan10",
    lastName: "Lannister",
    firstName: "Tyrion",
  },
  {
    email: "sansa.stark@example.com",
    password: "IHateJoffrey4ever",
    lastName: "Stark",
    firstName: "Sansa",
  },
  {
    email: "daenerys.targaryen@example.com",
    password: "MotherOfDragons3",
    lastName: "Targaryen",
    firstName: "Daenerys",
  },
];

function logIn() {
  let userEmail = prompt("Kérem adja meg az e-mail címét:");
  let foundUser = users.find((user) => user.email === userEmail);

  if (!foundUser) {
    alert("Sikertelen bejelentkezés: hibás e-mail cím!");
    return;
  }

  let userPassword = prompt("Kérem adja meg a jelszavát:");

  if (foundUser.password === userPassword) {
    alert("Sikeres bejelentkezés!");
  } else {
    alert("Sikertelen bejelentkezés: hibás jelszó!");
  }
}

function changeEmail(currentEmail, newEmail) {
  let userToUpdate = users.find((user) => user.email === currentEmail);

  if (!userToUpdate) {
    console.log("Nincs ilyen e-mail című felhasználó az adatbázisban!");
    return;
  }

  if (users.some((user) => user.email === newEmail)) {
    console.log("Már létezik felhasználó ezzel az e-mail címmel!");
    return;
  }

  userToUpdate.email = newEmail;
  console.log(
    `Az e-mail cím sikeresen frissítve lett: ${currentEmail} -> ${newEmail}`
  );
}

function register(email, password, passwordConfirmation, firstName, lastName) {
  if (password !== passwordConfirmation) {
    console.log("A jelszó és a jelszó megerősítése nem egyezik meg!");
    return;
  }

  if (users.some((user) => user.email === email)) {
    console.log("Már létezik felhasználó ezzel az e-mail címmel!");
    return;
  }

  let newUser = {
    email: email,
    password: password,
    lastName: lastName,
    firstName: firstName,
  };

  users.push(newUser);
  console.log("Új felhasználó sikeresen létrehozva!");
}

/*
  Mindenre válaszoltál? Átnézted? Patent?
*/


