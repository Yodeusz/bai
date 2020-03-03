// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let triangle_area = (a, b, c) => {
    p = 0.5 * (a + b + c)
    result = Math.sqrt(p*(p-a)*(p-b)*(p-c))
    return `Pole trojkata o bokach ${a}, ${b} oraz ${c} wynosi ${result}`
}

console.log(triangle_area(a, b, c));