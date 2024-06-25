{

    /* 
        interface
    */


    // declare object type with interface
    type User1 = {
        name: string;
        age: number;
        city: string
    }

    interface User2 {
        name: string;
        age: number;
        city: string;
    }


    type User1WithRole = User1 & { role: string };

    interface User2WithRole extends User2 { role: string };

    const user1: User2WithRole = {
        name: "jack",
        age: 23,
        city: "syl",
        role: "student"
    };

    // can not declare premitive data type with interface
    type StudentName = string;
    const newStudent: StudentName = "jack";



    // declare array type with interface

    type Nums1 = number[];

    interface Nums2 {
        [index: number]: number;
    }

    const nums1: Nums1 = [3, 5, 8, 10];
    const nums2: Nums2 = [3, 5, 8, 10];

    // declare function type with interface 

    type MultiplyResult1= (num1: number, num2: number) => number;

    interface MultiplyResult2 {
        (num1: number, num2: number): number;
    }

    const getMultiplyResult: MultiplyResult2 = (num1, num2) => {
        return num1 * num2;
    };

    const resultOfMultiply = getMultiplyResult(10, 5);
    console.log(resultOfMultiply);


















}