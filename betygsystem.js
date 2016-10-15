var grades = {			//Object literal, använde inte konstruktor
	students: [],		//Tom array. Här lagras studenter + betyg
	add: function() {	//Funktionen som adderar studenter
		while (true) {	//while loop som kör hela tiden
			var addName = prompt("Skriv in studentens namn (eller tryck avbryt)");		//och inmatningar lagras i en variabel
				if (addName === null) {													//Loopen bryts om svaret är null (= avbryt)
					break;
				}
			var addGrade = parseInt(prompt("Skriv in " + addName + "s betyg (1-5) eller tryck avbryt"));
				if (addGrade === null) {
					break;
				}
				else this.students.push({name: addName, grade: addGrade});			//i slutet av varje loop så pushas variablerna in som ett nytt objekt i arrayen
			}
		},
	average: function() {								//funktion som räknar ut medelbetyg
		var gradeSum = 0;
		var gradeItems = this.students.length;
		var gradeAverage = 0;
			for (var i = 0; i < gradeItems; i++) {
				gradeSum += this.students[i].grade;		//räknar ut summan av alla betyg
			}
			gradeAverage = gradeSum / gradeItems;		// och delar med antalet betyg
			console.log("The average grade these " + gradeItems + " students were: " + gradeAverage);
		},
	studentsPassed: [],
	studentsNotPassed: [],
	didPass: function(number) {							//skapar en array av de elever som klarat sig
			for (var i = 0; i < this.students.length; i++) {
				if (this.students[i].grade >= number){		//om studentens betyg är högre än argumentet läggs de till klarat sig-arrayen
					this.studentsPassed.push({name: this.students[i].name, grade: this.students[i].grade});
				}
				else this.studentsNotPassed.push({name: this.students[i].name, grade: this.students[i].grade});	//annars läggs de till kuggat-arrayen
			}
				console.log("passed: ", this.studentsPassed);													//på slutet returneras klarat sig-arrayen
		},
	didNotPass: function() {
			for (var i = 0; i < this.studentsNotPassed.length; i++) {											//Kuggat-metod som helt enkelt hämtar kuggat-arrayen och skriver ut den
				console.log("Not passed: " + this.studentsNotPassed[i].name + ", betyg: " + this.studentsNotPassed[i].grade);
			}
		},
	find: function(name) {				//sökfunktion
			var found = false;
			var searchPositve = "";
			var searchNegative = "Sorry, we could not find " + name;
			for (var i = 0; i < this.students.length; i++) {													//itererar igenom alla objekt än en gång
				if (this.students[i].name == name) {
					 searchPositive = "Search result: " + name + "s grade is " + this.students[i].grade;		//om vu får en match skapar vi ett positivt sökresultat och ändrar en bool
					 found = true;
					}
			}
				if (found) {																					//denna bool avgör sedan vilket sökresultat vi skriver ut
					console.log(searchPositive);
				}
				else console.log(searchNegative);
		}
};

grades.add();
grades.average();
grades.didPass(3);
grades.didNotPass();
grades.find("Jesper");

