{
    /*     
        use generic with function 
     */


    type AdditonRes = (num1: number, num2: number) => number;

    // type alias with out generic 
    const additonRes: AdditonRes = (num1, num2) => {
        return num1 + num2;
    };

    const result1 = additonRes(10, 20);


    // type alias with generic 
    type MakeArrayWithValuesGeneric = <T>(...values: T[]) => T[];

    const makeArrayWithValuesGeneric1: MakeArrayWithValuesGeneric= (...values) => {
        return [...values]
    };

    const result2 = makeArrayWithValuesGeneric1<number>(3, 5, 5);

    

    const result3 = makeArrayWithValuesGeneric1<string>("jodu", "modu", "kodu")


    
    // with out type alias
    const makeArray = <T>(...values: T[]) : T[] => {
        return [...values];
    };

    interface Person {
        id: number;
        name: string;
    }
    const result4 = makeArray<Person>({id: 1, name: "jodu"}, {id: 2, name: "mode"});


    const addCourseToStudent =<T, X> (student: T, course: X) : object => {
        
        return {
            ...student,
            course: course
        };
    };

    const stu1 = addCourseToStudent<{id: number, name: string}, string>({id: 1, name: "jeo"}, "Next Level Dev");
    const stu2= addCourseToStudent<{id: number, name: string, email: string}, string>({id: 1, name: "jeo", email: "joe@gmail.com"}, "Next Level Dev");
    


}

