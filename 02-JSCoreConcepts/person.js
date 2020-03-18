class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    returnPersonData(){
        return this.name + " " + this.surname.toUpperCase();
    }

    returnInitials(){
        return this.name[0] + "." + this.surname[0] + ".";
    }
}

var me = new Person("Wojciech", "Wysoglad");
var jan = new Person("Jan", "Nowak");

console.log(me.returnPersonData());
console.log(me.returnInitials());
console.log(jan.returnPersonData());
console.log(jan.returnInitials());