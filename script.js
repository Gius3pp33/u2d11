
//Esercizio 1

class User {
    constructor(firstName, lastName, age, location ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
     
    }
  
    compareAge(userToCompare){

      if (this.age > userToCompare.age) { 
        return this.firstName + " " + this.lastName + " " + "è più grande di" + " " + userToCompare.firstName + " " + userToCompare.lastName
      } else if (this.age < userToCompare.age) {
        return this.firstName + " " + this.lastName + " " + "è più piccolo di" + " " + userToCompare.firstName + " " + userToCompare.lastName
      }
    }
}

const user1 = new User("Mario", "Rossi", 30, "Roma");
const user2 = new User("Luca", "Bianchi", 33, "Milano");
console.log (user1.compareAge(user2));
console.log(user2.compareAge(user1));


//Esercizio 2
class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    sameOwner (otherPet) {
     return this.ownerName === otherPet.ownerName
          
    }
    
}
const pet1 = new Pet('Fido', 'Luigi', 'Cane', 'Labrador');
const pet2 = new Pet('Whiskers', 'Luigi', 'Gatto', 'Soriano');

console.log(pet1.sameOwner(pet2)); 

const pets = [] ;

const form = document.querySelector("form")

form.onsubmit = function (e) {

    e.preventDefault()

    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;
    

    const newPet = new Pet (petName,ownerName,species,breed);
    pets.push(newPet);


    console.log("Inviato")
    updatePetList();
    checkSameOwner();
    form.reset() // eventualmente alla fine possiamo resettare i campi
}

function updatePetList () {
const petListDiv = document.getElementById ('petList');
petListDiv.innerHTML= '';

pets.forEach(pet => {
    const petDiv = document.createElement('div');
    petDiv.className = 'pet';
    petDiv.innerHTML = `
                    <p>Pet Name: ${pet.petName}</p>
                    <p>Owner Name: ${pet.ownerName}</p>
                    <p>Species: ${pet.species}</p>
                    <p>Breed: ${pet.breed}</p>
                `;
                petListDiv.appendChild(petDiv);
                
})
}


// Esercizio extra,non richiesto
function checkSameOwner() {
    if (pets.length > 1) {
        // se nell'array c'è almeno un animale vado avanti 
        const lastPet = pets[pets.length - 1];
        const previousPet = pets[pets.length - 2];
        //ottengo gli ultimi due animali,l'ultimo e il penultimo
        if (lastPet.sameOwner(previousPet)) {
            console.log(`Gli animali ${lastPet.petName} e ${previousPet.petName} hanno lo stesso proprietario.`);
        } else {
            console.log(`Gli animali ${lastPet.petName} e ${previousPet.petName} hanno proprietari diversi.`);
        }
    }
}