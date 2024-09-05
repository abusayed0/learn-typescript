{
    // class

    class Person {
        // public name: string;
        // public age: number;
        // public profession: string;
        // public hobby: string;

        // parameter properties 
        constructor(public name: string, public age: number, public profession: string, public hobby: string){
            // this.name= name;
            // this.age = age;
            // this.profession = profession;
            // this.hobby = hobby;
        }
        introduce(){
            console.log(`Hello I am ${this.name}. I am a ${this.profession}.`)
        }
    }

    const jack = new Person("Jack", 22, "Student", "Travelling");
    const root = new Person("Root", 28, "Cricketer", "Shipping");
    root.introduce();
}