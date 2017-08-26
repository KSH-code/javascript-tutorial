/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-26 09:49:05
 * @modify date 2017-08-26 09:49:05
 * @desc [생성자]
 */
function Employee() {
    this.name = ''
    this.dept = "general"
}

function Manager() {
    Employee.call(this)
    this.reports = []
}
Manager.prototype = Object.create(Employee.prototype) //근로자 상속 받음

function WorkerBee(name, dept) {
    this.name = name || ''
    this.dept = dept || ''
    this.projects = []
}
WorkerBee.prototype = Object.create(Employee.prototype) //근로자 상속 받음

function SalesPerson(name, dept, quota) {
    WorkerBee.call(this, name, dept)
    this.quota = quota || 100
}
SalesPerson.prototype = Object.create(WorkerBee.prototype) //WorkerBee 상속 받음

function Engineer(name, dept, machine) {
    this.wb = WorkerBee //함수를 현재 객체에 넣어서 wb의 this가 현재 this로 되게
    this.wb(name, dept) //그리고 실행
    this.machine = machine || ''
}
Engineer.prototype = Object.create(WorkerBee.prototype) //WorkerBee 상속 뱓음
var manager = new Manager(),
    salesPerson = new SalesPerson('hello', 'bar', 'bar'),
    engineer = new Engineer('foo', 'bar', 'engineering')
console.log(manager)
console.log(salesPerson)
console.log(engineer)

/**
 * 속성 추가
 */
manager.bonus = 1000
console.log(manager)
console.log(salesPerson)
console.log(engineer)

function instanceOf(object, constructor) {
    object = object.__proto__; //__proto__는 prototype을 세팅할 때, __proto__=prototype 내부에서 이런 로직이 사용되나 보다.(관계를 확인하기 위해)
    while (object != null) {
        if (object == constructor.prototype)
            return true;
        object = object.__proto__;
    }
    return false;
}
console.log(engineer instanceof Employee)
console.log(engineer instanceof WorkerBee)
console.log(engineer instanceof Engineer)
console.log(engineer instanceof Object)
console.log(instanceOf(engineer, Engineer))
console.log(instanceOf(engineer, WorkerBee))
console.log(instanceOf(engineer, Employee))
console.log(instanceOf(engineer, Object))
console.log(instanceOf(engineer, SalesPerson))

/**
 * JS는 다중상속을 허용하지 않아서, 다음과 같이 구현해야 된다.
 */
function Habby(list) {
    this.list = list
}
engineer.hb = Habby
engineer.hb([1, 2, 3])
console.log(engineer)