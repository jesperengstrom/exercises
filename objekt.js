/* 

Skapa ett objekt

Skapa ett liknande objekt som ovan. Objektet ska dock den här gången vara ett album, alltså en skiva. 
Variabeln ska heta var album och ska ha tre properties: albumName, artist, year.

albumName ska vara en sträng med namn på valfritt album
artist ska vara artisten som gjort albumet i form av en sträng
year ska vara utgivet år i form av ett nummer.
Skriv sedan ut ditt objekt med console.log

SVAR:

var album = {
	albumName: "Illmatic",
	artist: "Nas",
	year: 1994
};

console.log(album);

----

Skriv ut innehållet i ett objekt

För att komma åt en specifik property kan vi använda två sätt:

album["albumName"];

album.albumName;
Det nedre är att föredra men det förekommer tillfällen där vi måste använda den övre notationen på vissa sätt 
så det är bra att känna till båda. Båda sätten ovan kommer att skriva ut samma värde.

Skriv ut någon av dina properties i ditt objekt med båda av dessa sätten.

SVAR:

var album = {
	albumName: "Illmatic",
	artist: "Nas",
	year: 1994
};

console.log(album.albumName);
console.log(album["year"]);

---

Skapa en kopia av ett objekt

Du ska nu skapa en ny variabel som heter var dublett. 
I denna variabel ska du nu tilldela ditt album som du skapade i förra övningen. 
Du ska sedan logga ut både variabeln album samt variabeln dublett för att se vad de har för innehåll.

SVAR:

var album = {
	albumName: "Illmatic",
	artist: "Nas",
	year: 1994
};

var dublett = album;

console.log(album, dublett);

---

Ta bort en egenskap från ett objekt

Man kan ta bort en property from ett objekt helt genom att skriva delete object.property 
om vi nu skulle vilja ta bort året från vårt objekt från tidigare skulle vi då skriva delete album.year.

Ta bort någon av properties från objektet dublett som ni skapade tidigare
Console.logga sedan ut båda objektet: album samt dublett för att se deras innehåll är.

SVAR: 

var album = {
	albumName: "Illmatic",
	artist: "Nas",
	year: 1994
};

console.log(album);
var dubblett = album;
delete dubblett.artist;
console.log(dubblett);

DE HAR INDENTISKA VÄRDEN TROTS ATT JAG BARA ÄNDRADE DET ENA!

----

Ändra ett värde i ett objekt

Ändra ett värde i ett av objekten, antingen album eller objekt.
Console.logga sedan båda objekten
Vad för innehåll har de båda objekten efter operationen?

SVAR:

var album = {
	albumName: "Illmatic",
	artist: "Nas",
	year: 1994
};

console.log(album);
var dubblett = album;
dubblett.artist = "Tupac";
console.log(dubblett, album);

IDENTISKT INNEHÅLL

--

Loopa genom ett objekt

För att loopa igenom objekt finns det speciella loopar som underlättar iterationen för oss. 
for..in-loopen låter oss enkelt loopa igenom properties i ett objekt.

for(property in object){
    console.log(property);
}
Använd for..in-loopen för att skriva ut alla dina properties i objektet som du skapade tidigare.

SVAR:

var album = {
	albumName: "Illmatic",
	artist: "Nas",
	year: 1994
};

for (var prop in album) {

	console.log(prop);
}

---

Loopa igenom properties

Just nu får vi bara ut properties men vi får inte ut alla värden. 
Varje värde i varje propertiy kan kallas på genom object.property eller genom object["property], 
då får vi ut värdet. Detta kan även användas om man ska få ut värdena i en loop.

for(property in object){
    console.log(object[property]);
}

För varje iteration i loopen får vi ut vad propertien heter. 
Denna property kan vi sedan använda för att komma åt ett värde i en property genom att hämta värdet 
från objektet med object[property]. Istället för att komma åt värdet via ett index använder man nu 
istället namnet på propertien.

Loopa igenom och skriv ut varje värde i ditt tidigare skapade objekt
Loopa igenom och skriv ut namnet på varje property samt värdet på den propertyn

SVAR:

var album = {
	albumName: "Illmatic",
	artist: "Nas",
	year: 1994
};

for (var key in album) {

	console.log(album[key]);	//Skriver endast ut värdet
}

for (key in album) {

	console.log(key + " " + album[key]);	//Skriver ut propertyn samt värdet
}

---

En funktion som skriver ut objektet

Skapa en funktion printContent som tar ditt (ett) objekt som argument.
Funktionen ska sedan skriva ut alla värden i objektet och returnera en sträng på liknande sätt: 
The album Blue by Joni Mitchell was release in 1971.

*/

var album = {
	albumName: "Illmatic",
	artist: "Nas",
	year: 1994
};

var printContent = function(print) {
	return "The album " + print.albumName + " by " + print.artist + " was released in " + print.year;
};

console.log(printContent(album));