/*

Objektmetoder

Lägg till en funktion i ett objekt

Använd koden ovan men skapa ytterligare en funktion i objektet. 
Denna funktion ska använda sig utav year och beräkna hur länge sen det var albumet släpptes. 
Funktionen ska returnera följande: This album was release 3 years ago. 
Där årtalet ska ändras beroende på vilket år ditt album släpptes.

SVAR:

var album = {
    albumName: "Trouble Will Find Me",
    artist: "The National",
    year: 2013,
    getContent: function(){
        return "The album "  + this.albumName + " by " + this.artist + " was released in " + this.year;
    },
    timeAgo: function() {

    	var currentYear = new Date().getFullYear();		//räknade ut året med Date
    	return "This album was released " + (currentYear - this.year) + " ago";

    }
};

console.log(album.timeAgo());

---

Vad är det för typ?

Använd koden ovan och kolla sedan vad de olika objekten har för typ med typeof på följande sätt:

function album(albumName, artist, year){
    this.albumName = albumName;
    this.artist = artist;
    this.year = year;
}

var newAlbum = new album("Album", "artist", 1873);
var newAlbum = new album("Album", "artist", 1873);

SVAR:

console.log(typeof album);				// function
console.log(typeof newAlbum);			// object
console.log(typeof newAlbum.artist);	//string

---

Create your weapon

Använd strukturen ovan (album()) och skapa en egen object constructor.
Objektet ska ha namnet weapon;
Objektet ska ta två parametrar: type och damage
Värdena ska lagras med hjälp av this.
Du ska sedan med hjälp av objektet kunna skapa olika sorters vapen genom att kalla på detta constructor-objekt 
via nyckelordet new och sedan lagra vapnet i enfu ny variabel.

SVAR:

function weapon(type, damage) {					//constructorn för vapen
	this.type = type;
	this.damage = damage;
}

var excalibur = new weapon("Sword", 30);		//skapar ett svärd med 30 i skada

--

Slay the monster

Whaa, ett monster!

function monster(name, health){
    this.name = name;
    this.health = health;
    this.speak = function(){
        console.log(this.name + " hungry! " + this.name + " kill!");
    }
}

var grublak = new monster("Grublak", 500);

grublak.speak();

Du har redan ett vapen som kan skada monstret från förra uppgiften.
Vi måste bygga en funktion som kan ta ner Grublak. Funktionen ska ta två argument, 
det ena argumentet ska vara ditt vapen och det andra argumentet ska vara monstret: 
function slayMonster(weapon, monster){}.

Funktionen ska sedan jämföra skadan från ditt vapen med livet på monstret.
Om damage är högre eller lika med monstrets health ska funktionen skriva ut Ouchy, me dead.
Om skadan inte är högre än hälsan på monstret ska skadan subtraheras (-) från monstrets health.
Funktionen ska fortsätta köras tills monstret är dräpt. D.v.s när damage är högre än health.

SVAR:

function weapon(type, damage) {					//constructorn för vapen
	this.type = type;
	this.damage = damage;
}

var excalibur = new weapon("Sword", 30);		//skapar ett svärd med 30 i skada


function monster(name, health){
    this.name = name;
    this.health = health;
    this.speak = function(){
        console.log(this.name + " hungry! " + this.name + " kill!");
    };
}

var grublak = new monster("Grublak", 500);

grublak.speak();

function slayMonster(weapon, monster){					//funktionen för att döda monster tar två parametrar
	while (monster.health >= weapon.damage) {			//Om monstrets hälsa är större än skadan så körs loopen
			monster.health -= weapon.damage;			// ... hälsan subtraheras med skadan varje gång
			console.log("Attacking " + monster.name + "! Creating " + weapon.damage + " in damage. " + monster.name + " health: " + monster.health);	
		}
	console.log("Ouchy, me dead.");					//här har loopen brutits och monstret dött
}

slayMonster(excalibur, grublak);					//Här kallar vi på funktionen o stoppar in vapen o monster

---

Critta monstret!

Du kan nu döda monstret. Men det kanske tar lite tid beroende på hur mycket skada ditt vapen gör. 
Grublak är dock svag mot vapen av typen Tenta.
Ändra i din funktion slayTheMonster så att om vapnet är av typen Tenta så tar Grublak dubbel skada.
Du har också turen på din sida. Ibland kan du få in en lyckosam crit så att du gör dubbel skada oberoende av vilket vapen du har. 
Det är 20% chans att du crittar.
Lägg till i din funktion så att du gör dubbel skada på monstret om du går en critical hit.

SVAR:

function weapon(type, damage, name) {		//Konstruktor vapen
	this.type = type;
	this.damage = damage;
	this.name = name;						//lade till en parameter, name
}

var excalibur = new weapon("Sword", 30, "Excalibur");	//två vapen som skickar in typ, skada och namn
var tenta = new weapon("Psyche", 30, "Tenta");


function monster(name, health){
    this.name = name;
    this.health = health;
    this.speak = function(){
        console.log(this.name + " hungry! " + this.name + " kill!");
    };
}

var grublak = new monster("Grublak", 500);

grublak.speak();

function slayMonster(weapon, monster){
	var i = 1;		//ett index som räknar rundorna
	console.log("Attacking " + monster.name + "! Monster health: " + monster.health);	//Skriver ut ingångsvärdet hälsa
		if (weapon === tenta && monster === grublak) {									//OM vapnet är tenta o monstret grublak...
				weapon.damage *= 2;														//...så blir skadan dubbel
				console.log("Lethal weapon " + weapon.name + "! Double damage!");
			}
		console.log(" ");
		while (monster.health >= weapon.damage) {					//Loopen körs så länge hälsan är högre än skadan
			
			var critical = 0;										//variabel som lagrar värdet från critical hit. Viktigt att den nollställs!
			var message = "";										//variabel för att meddela om skadan är critical
			var random = Math.floor((Math.random() * 5) + 1);		//variabel som slumpar 1-5 (20% chans att få 5)
			var round = "Round " + i;								//variabel som kan skriva ut vilken runda det är
				
				if (random === 5) {									//om slumpvariabeln är 5 (hade kunnat vara vilken siffra som helst)...
						critical = weapon.damage;					//... så sätts critical till vapnets skada 
						message = "Critical hit! ";					
				}

			monster.health -= (weapon.damage + critical);			//i slutet av varje loop subtraheras damage från vapen + ev critical hit
			console.log("Round " + i + ": " + message + weapon.name + " (" + weapon.type + ") makes " + (weapon.damage + critical) + " in damage. " + monster.name + " health: " + monster.health);
			i++;													//Loggar ut alltsammans + räknar upp index
			}
	console.log("Round " + i + ": "  + weapon.name + " (" + weapon.type + ") makes " + weapon.damage + " in damage. Ouchy, me dead.");
}

slayMonster(tenta, grublak);									//här sker metodanropet, vilket monster och vilket vapen

----

Slay all the monsters

Skapa en array av olika monster. Yes, man kan ha en array av objekt.
Loopa sedan igenom alla monster med din funktion. Antingen genom att ha en loop inuti 
funktionen eller genom att kalla på funktionen slayTheMonster i en loop.


*/

function weapon(type, damage, name) {		
	this.type = type;
	this.damage = damage;
	this.name = name;						
}

var excalibur = new weapon("Sword", 30, "Excalibur");	
var tenta = new weapon("Psyche", 30, "Tenta");

var monster = [ 									//Skapar en array av objekt, 3 olika monster
				{name: "Grublak", health: 500}, 
				{name: "Troll", health: 750},
				{name: "Witch", health: 1000}
			];


for (var i = 0; i < monster.length; i++) {		// loopen kör igenom samtliga objekt i arrayen
	var currentMonster = monster[i];			// variabel som lagrar det "nuvarande" monstret...
	slayMonster(tenta, currentMonster);			//... och som skickas med när slayMonster-metoden anropas i loopen.
}


function slayMonster(weapon, monster){
	var i = 1;									//ett index som räknar rundorna
	var powerWeapon = 0;						//NY variabel som säkerställer att vapenskadan inte är dubblad från föregående monster
	console.log("You encounter " + monster.name + "!!!");	
	console.log("Attacking " + monster.name + " with " + weapon.name + " (type: " + weapon.type + ", " + weapon.damage + " in damage). Monster health: " + monster.health);	
		
		if (weapon === tenta && monster.name === "Grublak") {									//OM vapnet är tenta o monstret grublak...
				powerWeapon = weapon.damage;													//...Så blir skadan dubbel genom poweweapon
				console.log(weapon.name + " is a lethal weapon on " + monster.name + "! Double damage!");
			}
			
			console.log(" ");
		
		while (monster.health >= weapon.damage) {					//Loopen körs så länge hälsan är högre än skadan
			
			var critical = 0;										//variabel som lagrar värdet från critical hit. Viktigt att den nollställs!
			var message = "";										//variabel för att meddela om skadan är critical. Viktigt att den nollställs.
			var random = Math.floor((Math.random() * 5) + 1);		//variabel som slumpar 1-5 (20% chans att få 5)
			var round = "Round " + i;								//variabel som kan skriva ut vilken runda det är
				
				if (random === 5) {									//om slumpvariabeln är 5 (hade kunnat vara vilken siffra som helst)...
						critical = weapon.damage;					//... så sätts critical till vapnets skada 
						message = "Critical hit! ";					
				}

			monster.health -= (weapon.damage + critical + powerWeapon);	//i slutet av varje loop subtraheras damage från vapen + ev critical hit + ev powerweapon
				
				if (monster.health <= 0) {								//Denna if ser till så att monstrets hälsa inte är ett minusvärde
					monster.health = 0;
					message = "AAAARHG! ";
				}

				console.log("Round " + i + ": " + message + weapon.name + " makes " + (weapon.damage + critical + powerWeapon) + " in damage. " + monster.name + " health: " + monster.health);

			i++;													//Loggar ut alltsammans + räknar upp index
		}

	console.log("Round " + i + ": You killed " + monster.name + "!");
	console.log("");
	console.log("");
}





