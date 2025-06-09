for (let i = 0; i < 5; i++) {
  console.log("The number is " + i)
}



const person = {
    fname: "john", lname: "doe", age: 25
};

for (let x in person) {
    console.log(person[x]);
}


const cars = ["BMW", "Merc", "Mini"];

for (let car of cars) {
    console.log(car)
}

