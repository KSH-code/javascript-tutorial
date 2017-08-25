function showProps(obj, objName) {
    var result = ""
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + "." + i + " = " + obj[i] + "\n"
        }
    }
    return result
}
console.log(showProps({
    make: 'Ford',
    model: 'Mustang',
    year: '1969'
}, 'myCar'))