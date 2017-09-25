/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-13 10:27:47
 * @modify date 2017-09-13 10:27:47
 * @desc [참조-세기(Reference-counting) 가비지 콜렉션]
 */
var obj1 = {

}
var obj2 = {
    obj1
}
obj1.obj2 = obj2 //서로 참조하는 중이라 메모리 해제가 안 일어남.

obj1.obj2 = null //참조를 끊어버리면 나중에 gc가 일어남