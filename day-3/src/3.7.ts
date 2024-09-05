{
    // static

    class abcStudent{
        static schoolId: string = "0343343";
        get getSchoolId (){
            return abcStudent.schoolId;
        }
    }

    const student1 = new abcStudent();
    const student2 = new abcStudent();
    console.log(abcStudent);

}