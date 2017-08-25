/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-25 02:45:23
 * @modify date 2017-08-25 02:45:23
 * @desc [Object create]
 */
// Animal properties and method encapsulation
var Animal = {
    type: "Invertebrates", // Default value of properties
    displayType: function() { // Method which will display type of Animal
        console.log(this.type);
    }
}

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Output:Fishes