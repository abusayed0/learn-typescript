{/*
union type
intersection type
*/


// union 
    type Developer = "frontendDev" | "fullstackDev";
    const newDev: Developer = "frontendDev";

    type Person = {
        name: string;
        age: number;
        contact?: string;
        gender: "male" | "female" | "others"
    };

    const person1: Person = {
        name: "jodu",
        age: 30,
        gender: "male",
    };



// intersection 

type PersonalData = {
    name: string;
    age: number;
    contact: string

}

type AcademicData = {
    roll: number;
    class: string;
    grade: string
};

type StudentInformation = PersonalData & AcademicData;
const student1 : StudentInformation = {
    name: "modu",
    age: 28,
    contact: "010000000000000",
    class: "xl",
    grade: "f",
    roll:3,
    
}


}