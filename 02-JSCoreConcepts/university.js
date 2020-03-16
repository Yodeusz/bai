names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names
    }

    startWith(letter){
        let result = [];
        for (let name of this.names) {
            if (name[0] == letter) {
                result.push(name);
            }
        }
        return result
    }

    sort() {
        return this.names.sort() 
    }

    get() {
        return // names (array) in natural order
    }

    getFirst(n) {
        if (n > this.names.length()){
            return "Error!"
        }
        return this.names.slice(0, n+1)
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



