/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Goedemorgen"

function morningGreeter() {
  return "Goedemorgen";
}

const greeting = morningGreeter();

console.log(greeting);

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"

function getSchool () {
  return "Novi Hogeschool";
}

console.log(getSchool())



/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"

function getCompliment() {
  return "Lekker bezig met die functies, Andrew!";
}

console.log(getCompliment())



/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]

function getGrades(){
  return [8,  8.5, 6, 7];
}
const question1 = "Opdracht 3, Verwachte uitkomst bij het aanroepen van de functie:  "
console.log(question1 + getGrades())
/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }

function getDetails() {
  const getId = {
    firstName: "Andrew",
    lastName: "Corsen",
  }
  return getId
}
const question2 = "Opdracht 4: object met daarin jouw eigen naam en achternaam teruggeeft: "+ getDetails();
console.log(question2)
console.log(getDetails())

// function getDetails(firstName, lastName) {
// return firstName+ " " +lastName
// }
//
// console.log("Andrew","Corsen")
// console.log(getDetails("Andrew","Corsen"))


// Vragen of het handiger is om parameters te gebruiken in de function, firstname/lastname of heb ik het zo juist opgelost?
// Waarom krijg ik de object niet te zien als ik het combineer met de vraag in de console log?
