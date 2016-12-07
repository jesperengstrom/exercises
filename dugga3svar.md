**Frågor**
**1. Förklara med egna ord vad ett objekt i JavaScript är.**

Ett objekt är en slags variabel där man kan samla och lagra all möjlig data som man vill hålla ihop: variabler av olika datatyp, arrayer, funktioner och andra objekt.
Ett objekt liknar en array till formen, men istället för index kommer man åt värden via objektets property-namn, ex `myObj.property`.
Objekt är smarta att använda på så sätt; det är enkelt att organisera, komma åt och återanvända datan i objektet, vi kan kapsla in kod o slipper smutsa ner så mycket i det globala namespacet.

**2. Skriv ett kodexempel där du lagrar följande datatyper i ett objekt, själva värdena får du välja själv:**
**a) ett heltal
b) en sträng
c) en bool
d) en funktion
e) ett annat objekt**

```javascript
var myObj = {
  number: 32, 
  string: "Jag är en sträng",
  bool: true,
  func: function(){
		alert("tjena");
	},
	obj2: {
		name: "Olle",
		age: 32,
		married: false
	}
};
```

**3. Jag vill nu få ut sista värdet i arrayen nedan. För att göra det så skriver jag en enkel `console.log` som tar längden på arrayen som index. I detta exempel kommer jag dock inte att få ut det sista värdet. Varför? Förklara i text.**

```javascript
var arr = [1,2,5,2,6];
console.log(arr[arr.length]);
```
Därför att vi blandar två olika sätt att räkna. Arrayens längd (`arr.length`) är 5, men eftersom index börjar på 0 ligger arrayens sista värde i `arr[4]`. För att få ut det får man alltså skriva `arr[arr.length - 1]`

**4. Skriv en `constructor`-funktion som skapar ett objekt av typen `Dog`. Funktionen ska lagra `Dog`s namn och ras i två variablar. *Instansiera* sedan två olika objekt (två olika hundar) utifrån denna funktion med olika egenskaper.**

```javascript
function Dog(name, breed) {
	this.name = name;
	this.breed = breed;
}

var dog1 = new Dog("Lady", "Cockerspaniel");
var dog2 = new Dog("Lufsen", "Byracka");
```

**5. Vad är lagrat i `a` efter att denna kod har körts? Förklara i text hur varje kodrad körs, vad som händer vid varje steg i koden.**

```javascript
var a = 0;
var obj = {
    a: 100,
    b: 200,
    c: 300
};
for(var value in obj){
    a += value;
}

```

a = 0abc

`for in`-loopen itererar genom alla objektets properties och adderar dem till 0. alltså 0a, 0ab och 0abc.
Denna är lurig eftersom man lätt tror att det är propertiens *värden* som adderas till a varje gång, men istället är det själva propertynamnet. Hade vi velat addera värdena hade vi fått skriva `a += obj[value];`.

**6. I en `constructor`-funktion eller i en funktion inuti ett objekt, om jag skulle använda nyckelordet `this`. Vad skulle `this` i så fall syfta till?**

I en funktion inne i ett objekt skulle `this` syfta på själva objektet som det är en del av. Ex:

```javascript
var myObj = {
	name: "Jesper",
	age: 34,
	func: function() {
		return this.name;
	}
};

console.log(myObj.func()); //returnerar Jesper, this = myObj
```

I en konstruktor så syftar this på det nya objektet som vi skapar. Om vi tar fråga 4 ovan som exempel: När objektet dog1 skapas med hjälp av konstruktorn så byts `this.name` ut mot `dog1.name`.

