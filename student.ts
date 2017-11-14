export class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Fullname():string {
        return this.firstName + " " + this.middleInitial + " " + this.lastName 
    }
}

export interface Person {
    firstName: string;
    lastName: string;
}
