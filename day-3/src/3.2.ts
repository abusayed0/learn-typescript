{
    // opp ---------> inheritance

    class Person {
        constructor(public name: string, public age: number, public profession: string, public hobby: string){

        }
        introduce(){
            console.log(`Hello everyone, i am ${this.name}. I am a ${this.profession}.`);
        }
    }

    const anyPerson = new Person("Pow", 34, "Teacher", "Reading");
    console.log(anyPerson);
    anyPerson.introduce();

    class Student extends Person{
        constructor(name: string, age: number, profession: string, public hobby: string, public favSub: string, public studyIn: string){
            super(name, age, profession, hobby)
        }
        study(){
            console.log(`Now i studing my favourite subject ${this.favSub}.`);
        }
       
    }

    const dobu = new Student("Dobu", 22, "Student", "Travelling", "Physics", "Xll");
    console.log(dobu);
    dobu.introduce();
    dobu.study()

    class Cricketer extends Person{
        constructor(name: string, age: number, profession: string, hobby: string, public favTeammate: string, public playerType: string, public country: string){
            super(name, age, profession, hobby)
        }
        practise(){
            console.log(`Now i practising with ${this.favTeammate}.`);
        }
       
    }

    const drak = new Cricketer("Drak", 29, "Cricketer", "Fishing", "Perter", "Bowler", "England");
    console.log(drak);
    drak.introduce();
    drak.practise()

}