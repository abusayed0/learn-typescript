/*
 destructuring 
*/


// object destructuring 
const customer = {
    id : 34313,
    name: {
        initialName: "joe",
        endName: "root"
    },
    address: {
        present: {
            postCode: 8803,
            houseNo: 83
        }
    }
};

const {name:{initialName:fName}} = customer;

// array descruturing 

const flower = ["shapla", "rose"];
const [, favFlower] = flower;
console.log(favFlower);