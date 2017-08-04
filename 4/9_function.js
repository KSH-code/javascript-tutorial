/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-04 02:08:54
 * @modify date 2017-08-04 02:08:54
 * @desc [this]
 */
function Person() {
    // The Person() constructor defines `this` as itself.
    this.age = 0;

    setInterval(function growUp() {
        // In nonstrict mode, the growUp() function defines `this` 
        // as the global object, which is different from the `this`
        // defined by the Person() constructor.
        this.age++;
    }, 1000);
}

var p = new Person();

/**
 * ES3/5 에서, this를 변수에 할당이 가능해졌다.
 */
function Person() {
    var self = this; // Some choose `that` instead of `self`. 
    // Choose one and be consistent.
    self.age = 0;

    setInterval(function growUp() {
        // The callback refers to the `self` variable of which
        // the value is the expected object.
        self.age++;
    }, 1000);
}