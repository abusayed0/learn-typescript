{
    /*     
         utility type 
         ___________________
         pick
         ommit
         required
         partial
         readonly
         record
         record
     */

    type Person = {
        name: string;
        email?: string;
        age?: number;
        contact: string;
    }

    type Name = Pick<Person, "name"> //pick


    type ContactInfo = Omit<Person, "name" | "age"> //ommit

    type PersonRequired = Required<Person> //required


    type PersonPartial = Partial<Person> // partial


    type PersonReadonly = Readonly<Person> //readonly

    const person1: PersonReadonly = {
        name: "jack",
        age: 343,
        contact: "4343",
        email: "jack@gmail.com"
    }

    type objRecord = Record<string, string>

    const student: objRecord = {
        name: "jack",
        age: "50"
    }
}