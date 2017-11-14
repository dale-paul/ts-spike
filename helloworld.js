"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
function greeter(person) {
    return person.firstName + " " + person.lastName;
}
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var person = new student_1.Student("Karin", "F", "Paul");
        var greeting1 = person.Fullname();
        var greeting2 = greeter(person);
        var elt = document.getElementById("greeting");
        elt.innerText = greeting1;
        console.log(greeting1);
        console.log(greeting2);
        return 0;
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=helloworld.js.map