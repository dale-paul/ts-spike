import {Student} from "./student";
import {Person} from "./student"

function greeter(person:Person):string{
    return person.firstName + " " + person.lastName
}

class Startup {
    public static main(): number {
        var person = new Student("Karin","F","Paul")
        var greeting1:string = person.Fullname(); 
        var greeting2:string = greeter(person);
        const elt = document.getElementById("greeting");
        elt.innerText = greeting1;
        console.log(greeting1);
        console.log(greeting2);
        return 0;
    }
}

Startup.main();

