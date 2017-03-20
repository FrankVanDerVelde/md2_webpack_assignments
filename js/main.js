/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */

/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
 */

  var product1 = "webshop";
  var product2 = "chatroom";
  var product3 = "website";
  var product4 = "canvas art";
  var product5 = "calculator";

  var nummer1 = 666;
  var nummer2 = 1337;
  var nummer3 = 69;
  var nummer4 = 420;
  var nummer5 = 777;

  var boolean1 = true;
  var boolean2 = false;
  var boolean3 = true;
  var boolean4 = false;
  var boolean5 = true;

debugger;

/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
 */

 var ziektes = ["aids", "cholera", "ebola"];
 var pizzas = ["salami", "ham", "hawaii"];
 var consoles = ["Switch", "ps4", "xbox1"];
 
 console.log(ziektes, pizzas, consoles);

/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */

var fruit = new Array();
fruit["1"] = "appel";
console.log(fruit);

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */

var namen = ["jan", "peter", "gijs", "stefan", "frank"];
namen.splice(0, 1);
namen.splice(1,1);
console.log(namen);

/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
 */

 var fruit2 = {soort:"appel", kleur:"rood", steel:"ja"};
 var consoles2 = {merk:"nintendo", soort:"switch", kleur:"zwart"};
 var auto = {type:"Fiat", model:"500", color:"white"};
 var dier = {soort:"kip", geslacht:"vrouw", kleur:"zwart"};
 var boom = {soort:"naaldboom", naam:"dennenboom", seizoen:"winter"};
 var eten = {maaltijd:"ontbijt", gezond:"nee", naam:"chocoladesorbetmetextravetjes"};
 var slaaf = {huidskleur:"geel", expertise:"technology", landvanangst:"china"};
 var tafel = {houtsoort:"beuken", kleur:"bruin", aantalpoten:"7"};
 var ziekte = {naam:"hiv", dodelijk:"nee", besmetelijk:"ja"};
 var site = {naam:"facebook", leuk:"ja", kleur:"blauw/wit"};

 console.log(fruit2, consoles2, auto, dier, boom, eten, slaaf, tafel, ziekte, site);

/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
 */

function multiply (p1, p2) {
    return p1 * p2;
}
console.log(multiply(2,5));


function divide (p1, p2) {
    return p1 / p2;     
}
console.log(divide(2,5));

function substract (p1, p2) {
    return p1 - p2;     
}
console.log(substract(2,5));

function add (p1, p2) {
    return p1 + p2;     
}
console.log(add(2,5));

/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */

function person(firstName,lastName) {
    var newPerson = {firstName:firstname, lastName:lastname};
    zzxx
    console.log(newPerson);
}




 

/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

/**
 * Opdracht 9: Functions, objects
 * Maak een object genaamd 'student'
 * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met
 * de naam 'showName'
 */

/**
 * Opdracht 10: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */

/**
 * Opdracht 11: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */

/**
 * Opdracht 12: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */

/**
 * Opdracht 13: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
console.log('De naam van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Alle facturen van een zakelijke klant sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Een factuur sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
            { array : false, object : false, primitive : false });

/**
 * Opdracht 14: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */

/**
 * Opdracht 15: Keywords
 * Geef antwoord op de volgende vragen:
 */
console.log('Wanneer gebruik je de let keyword?', 'jouw antwoord');
console.log('Wanneer gebruik je de const keyword', 'jouw antwoord');

/**
 * Opdracht 16: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */