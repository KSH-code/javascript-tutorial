/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-20 09:35:30
 * @modify date 2017-08-20 09:35:30
 * @desc [description]
 */
var names = ["Hochberg", "Hönigswald", "Holzman"];

var germanPhonebook = Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hönigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// logs "Hochberg, Holzman, Hönigswald"