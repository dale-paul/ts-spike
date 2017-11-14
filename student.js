"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Student.prototype.Fullname = function () {
        return this.firstName + " " + this.middleInitial + " " + this.lastName;
    };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=student.js.map