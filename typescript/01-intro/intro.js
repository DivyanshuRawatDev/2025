var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetials = function () {
        console.log(this.age);
    };
    return Person;
}());
var div = new Person("Divyanshu", 21);
div.getDetials();
