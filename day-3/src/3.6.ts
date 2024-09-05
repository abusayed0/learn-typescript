{
    // getter and setter

    class School {
        name: string;
        location: string;
        establieshed: number;
        totalStudent: number;
        totalTeacher: number;

        constructor(name: string, location: string, established: number, totalStudent: number, totalTeacher: number){
            this.name = name;
            this.location = location;
            this.establieshed = established;
            this.totalStudent = totalStudent;
            this.totalTeacher = totalTeacher;
        }

        get getName(){
            return this.name;
        }

        set addNewStudent(newStudent: number){
            this.totalStudent = this.totalStudent + newStudent;
        }

        
    }
    const abcSchool = new School("ABC", "XYZ", 1995, 2000, 38);
    console.log(abcSchool);
    console.log(abcSchool.getName);
    abcSchool.addNewStudent = 500;
    console.log(abcSchool.totalStudent);
}