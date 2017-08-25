/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-25 02:38:02
 * @modify date 2017-08-25 02:38:02
 * @desc [ES5 이전 Object key 나열]
 */
function listAllProperties(o) {
    var objectToInspect;
    var result = [];

    for (objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }

    return result;
}
console.log(listAllProperties({
    key: 'value',
    value: 'key'
}))