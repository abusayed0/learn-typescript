{
    /* 
        mapped type
     */


    const numsArray: number[] = [3, 8, 38, 80];

    const stringArray: string[] = numsArray.map((num: number): string => num.toString());


    type StudentNumber = {  
        roll: number;
        age: number;
        averageMark: number
    }

    type Roll = StudentNumber["roll"] // lookup 

    // type StudentString = {
    //    
    //     roll: string;
    //     age: string;
    //     averageMark: string
    // }

    type StudentString<T> = {
        [key in keyof T]: T[key]; // mapped type
    }

    const stundent1: StudentString<{roll: string; weight: number}> = {roll: "343", weight: 50}
}