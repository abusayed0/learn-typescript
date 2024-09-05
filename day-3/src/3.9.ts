{
    // opp -----------> abstraction

    // there are two way to do abstraction 
    // 1. using interface
    // 2. using abstract class 


    // using interface
    interface StudentInterface {
        name: string;
        studentId: number;
        study(): void;
        sleep(): void;
    }

    class Student1 implements StudentInterface {
        name: string;
        studentId: number;
        constructor(name: string, studentId: number) {
            this.name = name;
            this.studentId = studentId;
        }
        study(): void {
            console.log("Its study time..");
        }
        sleep(): void {
            console.log("Its sleeping time..");
        }
    }

    const student1 = new Student1("Jack", 43434);
    // console.log(student1);
    // student1.study()


    // using abstract class 

    abstract class StudentAbstraction {
        abstract name: string;
        abstract studentId: number;

        abstract study(): void;
        abstract sleep(): void;
    }

    class Student2 extends StudentAbstraction {
        name: string;
        studentId: number;

        constructor( name: string, studentId: number){
            super()
            this.name = name;
            this.studentId = studentId;
        }
        study(): void {
            console.log("Its study time..");
        }
        sleep(): void {
            console.log("Its sleeping time..");
        }
    }

    const student2 = new Student2("Peter", 33434);
    console.log(student2);
}