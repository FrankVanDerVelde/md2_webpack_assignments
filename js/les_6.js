

/**
 * Opdracht 1: imports
 * Importeer conditions.utils.js
 *
 * Maak een object aan en check via existy() of hij bestaat
 * Maak een variabele aan maar geef hem nog geen vulling. Console.log() wat existy() teruggeeft
 */

 import {existy} from "utils/conditions.utils.js";

 let chickentendies = "harry";

 console.log(existy(chickentendies));

 import {triggerseed} from "utils/newfunction.utils.js";

/**
 * Opdracht 2: exports
 *
 * Maak een eigen util bestand aan met een functie die je handig lijkt om te hebben
 * Je kan aan iets simpels denken als je multiply functie
 * Maar misschien weet je iets anders te bedenken. Bijvoorbeeld een functie die je helpt
 * met random getallen. getRandom(from, to)
 * importeer je bestand hier en voer je functie uit
 */

 import {randomNumber} from "utils/math.utils.js";
 console.log(randomNumber(1,5));

/**
 * Opdracht 3: Analyseer de Student Class
 *
 * Importeer de Class en maak 3 studenten aan
 * Beantwoord de volgende vragen
 */

 import Student from "entities/student.js";
 const newStudent = new Student("frank", "velde", 17);

console.log('constructor getFullName proto');

console.log('kan je na het aanmaken van een student nog bij zijn leeftijd?', 'ja');

/**
 * Opdracht 4: Student Class
 *
 * Console.log() de fullNames van je 3 aangemaakte studenten
 */

 const student1 = new Student("cindy", "patat", 66);
 const student2 = new Student("henk", "pizza", 13);
 const student3 = new Student("patricia", "brard", 30);

 console.log(student1.getFullName());
 console.log(student2.getFullName());
 console.log(student3.getFullName());

/**
 * Opdracht 5: Custom class
 *
 * Roep mij erbij als je langer dan 5 a 10 minuten over deze opdracht na moet denken
 * Dan help ik even
 *
 * Maak een eigen Classroom class met de volgende functionaliteiten:
 * addStudent() sla de student op in een array
 * getStudent() studenten kunnen ophalen
 * getAllStudents(). Deze functies geeft alle toegevoegde studenten terug
 * Mocht je meer methods weten: voeg deze zeker toe
 * maak een aantal classrooms aan
 */

/**
 * Opdracht 6: Custom class
 *
 * Maak een eigen School class met de volgende functionaliteiten:
 * addClassRoom()
 */