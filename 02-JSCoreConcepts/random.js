const fillArray = (min, max, numOfElements) => {
    array = []
    for (let i=0; i<10; i++){
        array.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return array;
}

const displayArray = () => {
    console.log(fillArray(5,20,10))
}

displayArray()