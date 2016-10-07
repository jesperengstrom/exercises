/*
Vi ska börja med att skriva ut olika värden i en array. Om vi har en array som denna:

var yourArray = [23, 45, 54, 12, 77];
Skriv ut det första och sista värdet (23 & 77) i denna array med hjälp av console.log.
Vilka index ligger värdena på? 

SVAR:console.log(yourArray[0], yourArray[4])
SVAR: 0 och 4

---

Om vi redan har en array som den ovan kan vi även direkt ändra på ett visst värde på samma sätt som när vi tilldelar 
en variabel ett värde med =.

Ändra sista värdet i yourArray genom att tilldela det nya värdet 1.
Console.logga arrayen efter att du har lagrat det nya värdet för att se att värdet verkligen har ändrats.

SVAR:

var yourArray = [23, 45, 54, 12, 77];

yourArray[4] = 1;

console.log(yourArray);

----

Loopa genom en array

För att komma åt alla värden i en array vill vi ju inte skriva in varenda index, 
speciellt inte om vi inte vet hur lång arrayen är, alltså hur många värden som finns inuti den. 
Vi kan inte bara skriva ut hela innehållet i arrayen med console.log(myArray); 
heller, det kommer bara att skriva ut hela arrayen och inte alla värden för sig. Tur att loopar finns.

Du har denna array:

var bestArray = [ 1, 2, 3, 4, 5];
Nu ska du loopa igenom arrayen och skriva ut varje värde i arrayen. 
Tänk på att längden av en array kan man ta ut med .length samt att varje värde i en array har ett 
index som man kommer åt värdet ifrån.

SVAR:

var bestArray = [ 1, 2, 3, 4, 5];
var i = 0;
var arLen = bestArray.length;	//gör en variabel av längden så att den inte skapas i varje loop
for (i; i < arLen; i++) {
	console.log(bestArray[i]);
}

---

Loopa och multiplicera

Använd samma array som tidigare. Nu ska du dock loopa igenom arrayen och multiplicera varje värde i arrayen 
med summan av det föregående värdet. D.v.s, 1 * 2 * 3.. etc.

Spara värdet i en var sum och console.logga sedan ut denna variabel efter att loopen har körts klart

SVAR:

var bestArray = [ 1, 2, 3, 4, 5];
var arLen = bestArray.length;
var i = 0; var sum = bestArray[0];		//vad ska sum vara???

for (i; i < arLen; i++) {
	sum *= bestArray[i];	
}

console.log(sum);

FUNKARN BARA NÄR FÖRSTA ÄR 1!!!!

-----

Filtrera array efter längd på innehållet

Du ska utgå från följande array:

var okArray = [ "fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];
Du ska loopa igenom arrayen och console.logga dess värden. 
Dock ska din loop inte skriva ut strängar som är längre än 5 tecken. 
"fine", "FINE", "good" och "sweet" ska alltså skrivas ut men inte "whatisthisstuff?" och "i don't even live here".

Kom ihåg att man kan ta ut en strängs längd på samma sätt som man tar ut längden på en array.

SVAR:

var okArray = [ "fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];

var i = 0;
for (i; i < okArray.length; i++) {
	if (okArray[i].length < 6) {
		console.log(okArray[i]);
	}

}

----

Filtrera array beroende på innehåll

Om vi kan filtrera efter hur lång en sträng är kan vi även filtera arrayen baserat på andra kriterier. 
Om vi använder samma array som tidigare ska vi nu bara skriva ut strängen i arrayen om strängen är "fine". 
Detta gäller alltså för både "fine" och "FINE".

SVAR:

var okArray = [ "fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];

var i = 0;
for (i; i < okArray.length; i++) {
	if (okArray[i] === "fine" || okArray[i] === "FINE" ) {
		console.log(okArray[i]);
	}
}

---

Filtrera array baserad på sträng eller nummer

var worstArrayYet = ["string", true, 42, "another string", 54, null, 12];
Vi kan använda typeof eller isNaN() för att vad för typ någonting är, 
om det t.ex. är en funktion eller en sträng. Ta hjälp av typeof eller `isNaN()för att lösa denna uppgift.

Du ska loopa igenom arrayen worstArrayYet och ska sedan console.logga varje sträng som förekommer i arrayen. 
Men om värdet i arrayen är ett nummer ska det värdet läggas till i var sum; för att sedan console.loggas. 
Om det är något annat än en sträng eller ett nummer ska ingenting ske.

*/

var worstArrayYet = ["string", true, 42, "another string", 54, null, 12];
var i = 0; sum = 0;
for (i; i < worstArrayYet.length; i++) {
	console.log(worstArrayYet[i]);
		if (typeof worstArrayYet[i] === "number") {
			sum += worstArrayYet[i];

		}

}

console.log(sum);