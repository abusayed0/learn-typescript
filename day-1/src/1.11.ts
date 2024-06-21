{
/* 
ternary operator
optional chaining
nullish coalescing 
 */

// ternary operator
const age : number = 28;
age >= 18 ? console.log("adult") : console.log("immature");


// nullish coalescing operator
let contact;
const contactInformation = `contact number is ${contact ?? "unknown"}`;
console.log(contactInformation);


// optinal chaining 
type Person = {
    name: string;
    age: number;
    address:{
        postCode: number;
        area: string;
        roadNo: number;
        houseNo?: number
    }
};

const person1 : Person = {
    name: "jodu",
    age: 30,
    address: {
        area: "abc",
        postCode: 33,
        roadNo: 534,
    }
};

const person1HouseNo = person1?.address?.houseNo ?? "no data found";
console.log(person1HouseNo);

}