/* 

Arraymetoder

Pop Pop!

Ibland vill man ta bort ett värde ur en array, då finns det olika inbyggda metoder man kan använda. 
Det vanligaste brukar vara att man använder .pop(). .pop() tar ut det sista värdet ur en array.

var popArray = [5, "hello", 54, 17, 23];
Poppa sista värdet i arrayen ovan.
Fortsätt poppa tills arrayen är tom skriv ut i console.log efter varje pop
Console.logga arrayen till slut för att se att alla värden är borta.

SVAR:

var popArray = [5, "hello", 54, 17, 23];

console.log(popArray);
popArray.pop();
console.log(popArray);
popArray.pop();
console.log(popArray);
popArray.pop();
console.log(popArray);
popArray.pop();
console.log(popArray);
popArray.pop();
console.log(popArray);

---

Push

Nu har vi tagit bort alla värden, det var ju dumt. Men vi kan lägga till nya värden med .push(). 
.push() lägger till ett nytt värde sist i arrayen.

popArray.push(12);
Lägg till ett nytt värde i din array med push.
Lägg till två nya värden samtidigt med push!

SVAR:

var popArray = [5, "hello", 54, 17, 23];

console.log(popArray);
popArray.pop();
console.log(popArray);
popArray.pop();
console.log(popArray);
popArray.pop();
console.log(popArray);
popArray.pop();
console.log(popArray);
popArray.pop();
console.log(popArray);

popArray.push("Hej!");
console.log(popArray);
popArray.push("På dig", 24);
console.log(popArray);

---

Shift

.shift() tar också ut värden ur en array. Denna metod tar dock ut det första värdet i en array.

Shifta arrayen två gånger med .shift()
Console.logga arrayen efter varje gång du shiftar för att se innehållet i arrayen.

SVAR:

var popArray = [5, "hello", 54, 17, 23];

console.log(popArray);
popArray.shift();
console.log(popArray);
popArray.shift();
console.log(popArray);

---

Unshift

Det finns även en .unshift() som är .shift()s motsats. 
Istället för att lägga värdet sist i arrayen som .push() gör så läggs värdet nu först i arrayen.

Använd .unshift() för att lägga till två valfria värden i arrayen.
Logga ut arrayen efter varje .unshift() för att se resultatet.

SVAR:

var popArray = [5, "hello", 54, 17, 23];

console.log(popArray);
popArray.unshift("Tjena");
console.log(popArray);
popArray.unshift("Läget?", 34);
console.log(popArray);

----

Splice

.splice() används för att ta ut den del av en array. 
Man kan skicka med ett argument som säger vilket index som beskärningen ska ske. 
Splice fungerar ungefär som .substring().

Ta ut de 2 sista värdena i din array med metoden .splice().
Ta ut de 2 sista värdena i din array med metoden .splice() och lagra dessa värden i en ny array.
Logga ut båda arrayerna för att se innehållet efteråt.

SVAR:

var myArray = ["Jesper", "Hej", 54, 76, null, 18];

console.log(myArray);
myArray.splice(4);
console.log(myArray);
var myNewArray = myArray.splice(2);
console.log(myNewArray);
console.log(myArray);

---

Splice 2 - The Return

Splice kan även ta ett andra argument så som substring. Det andra värdet blir hur många värden som ska plockas ut. 
.splice(0,2) börjar på index 0 och tar ut två värden.

Ta ut de två mellersta värdena i din array och lagra dem i en ny array.

SVAR:

var myArray = ["Jesper", "Hej", 54, 76, null, 18];
console.log(myArray);

var myNewArray = myArray.splice(2, 2);
console.log(myArray);
console.log(myNewArray);

----

concat

var myArray1 = [1,2,3];
var myArray2 = [4,5,6];
Metoden .concat() kan sätta ihop två arrayer till en array. 
Vi har stött på ordet concat förut, det är ett vanligt förekommande ord som betyder att man sätter ihop två saker.

Sätt ihop arrayerna ovan med hjälp av .concat() och lagra den nya arrayen i en ny variabel.

SVAR:

var myArray1 = [1,2,3];
var myArray2 = [4,5,6];
console.log(myArray1);
console.log(myArray2);

var myNewArray = myArray1.concat(myArray2);
console.log(myNewArray);

----

Sort 1

Det finns en inbyggd sorteringsfunktion som kan användas på arrayer som sorterar alla värden i arrayen 
baserat på dess värde.

Sortera arrayen nedan med hjälp av .sort()
Console.logga sedan arrayen så att du ser att arrayen har blivit sorterad
var sortingArray = [ 45, 23, -5, 12];

SVAR:

var sortingArray = [ 45, 23, -5, 12];
console.log(sortingArray);

sortingArray.sort();
console.log(sortingArray);

----

Sort 2

Men hur blir det när vi ska sortera värden som inte är nummer?

Sortera följande array med .sort() och se vad som händer! 
Testa att använda olika sorters värden och se hur det sorteras.

var crazySort = ["string", "hej", "what", "wordsyo"];	

SVAR:

var crazySort = ["string", 3, "hej", "what", "wordsyo", 9]; //alfabetiskt. Siffror o strängar: siffror först, sedan strängar
console.log(crazySort);

crazySort.sort();
console.log(crazySort);	// 

----

Reverse

Det finns redan en inbyggd funktion som vänder på vår array så vi slipper loopa igenom och vända på den själva

Använd .reverse() för att vända på din numera sorterade array!

SVAR:

var crazySort = ["string", 3, "hej", "what", "wordsyo", 9];
console.log(crazySort);

crazySort.sort().reverse();
console.log(crazySort);


*/