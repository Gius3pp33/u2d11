
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
    const sameOwnerExists = checkSameOwner(newPet);
    console.log("They have the same Owner : " + sameOwnerExists);
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


function checkSameOwner(newPet) {
    //itero nell'array pets 
    for (const pet of pets) {
        //confronto ogni animale con il nuovo animale (newPet) come argomento
        if (pet !== newPet && pet.sameOwner(newPet)) {
            console.log(`Gli animali ${newPet.petName} e ${pet.petName} hanno lo stesso proprietario.`);
            return true;
            //restituisce true se trova almeno un animale con lo stesso proprietario
        }
    }
    //se non lo trova manderà questo messaggio
    console.log(`Nessun animale con lo stesso proprietario di ${newPet.petName}.`);
    return false;
}