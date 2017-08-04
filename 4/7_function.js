/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-04 01:29:08
 * @modify date 2017-08-04 01:29:08
 * @desc [클로저]
 */
var pet = function(name) { // 외부 함수는 'name'이라 불리는 변수를 저장합니다.
        var getName = function() {
            return name // 내부 함수는 외장 함수의 'name' 변수에 접근 할 수 있습니다.
        }
        return getName // 내부 함수가 리턴함으로써, 외부 함수로 노출됩니다.
    },
    myPet = pet("Vivie")

console.log(myPet()) // Vivie

console.log()
    /**
     * 더 복잡해질 수 있다.
     */
var createPet = function(name) {
    var sex

    return {
        setName: function(newName) {
            name = newName
        },

        getName: function() {
            return name
        },

        getSex: function() {
            return sex
        },

        setSex: function(newSex) {
            if (typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
                sex = newSex
            }
        }
    }
}

var pet = createPet("Vivie")
console.log(pet.getName()) // Vivie

pet.setName("Oliver")
pet.setSex("male")
console.log(pet.getSex()) // male
console.log(pet.getName()) // Oliver

/**
 * 이렇게 하면 코드가 더 안전해진다고 한다.
 * secure coding인가?
 */
var getCode = (function() {
    var secureCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify...

    return function() {
        return secureCode;
    };
})();

getCode(); // Returns the secureCode
var createPet = function(name) {
    return {
        setName: function(name) {
            name = name // 이제 외부 함수 인수인 name을 접근 못한다.
        }
    }
}