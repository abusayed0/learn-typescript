{
    // type guard using instance of

    class Person{
        name: string;
        age: number;
        profession: string;
        constructor(name : string, age: number, profession: string){
            this.name = name;
            this.age = age;
            this.profession = profession;
        }
        introduce(){
            console.log(`Hi I am ${this.name} and i am a ${this.profession}`);
        }
    }

    // console.log(Person);
    const jdouPer = new Person("Jdou", 23, "Marketer");
    // console.log(jdouPer);
    // jdouPer.introduce();

    class Student extends Person{
        readIn: string;
        favTeacher: string;
        constructor(name: string, age: number, profession: string, readIn: string, favTeacher: string){
            super(name, age, profession)
            this.readIn= readIn;
            this.favTeacher = favTeacher;
        }
        study(){
            console.log(`${this.name} studing`);
        }
    }


    const peterStu = new Student("Peter", 22, "Student", "XI", "Kodu");
    // console.log(peterStu);
    // peterStu.introduce();
    // peterStu.study()

    class Driver extends Person{
        carType: string;
        constructor(name: string, age: number, profession: string, carType: string){
            super(name, age, profession)
            this.carType = carType;
        }
        drive(){
            console.log(`${this.name} is driving`);
        }
    }

    const jeturDri = new Driver("Jeter", 28, "Driver", "BMW");
    // console.log(jeturDri);
    // jeturDri.introduce();
    // jeturDri.drive()

    const callPersonMethod = (person: Person) => {
        if(person instanceof Driver){
            person.drive();
        } else if(person instanceof Student){
            person.study();
        }else{
            person.introduce();
        }
    }
    callPersonMethod(jdouPer)
   
}