{
    /* 
        generic type 
     */

    type GenericArray<T> = Array<T>;

    // const numbers: number[] = [3, 8, 29, 20];
    const numbers: GenericArray<number> = [3, 8, 29, 20];

    // const fruits: string[] = ["mango", "banana", "apple"];
    const fruits: GenericArray<string> = ["mango", "banana", "apple"];

    // const booleanArray: boolean[] = [true, false, true];
    const booleanArray: GenericArray<boolean> = [true, false, true];

    type User = {
        name: string;
        age: number;
        profession: string
    };

    const users: GenericArray<User> = [
            {
                name: "jack",
                age: 30,
                profession: "cricketer"
            },
            {
                name: "joe",
                age: 25,
                profession: "cricketer"
            },
            {
                name: "mack",
                age: 25,
                profession: "footballer"
            }
        ];


    type GenericTupple<X, Y> = [X, Y];

    const person: GenericTupple<string, number> = ["jack", 28];

    const member: GenericTupple<string, number> = ["joe", 30];

    const guest: GenericTupple<number, {name: string, mail: string}> = [434, {name: "root", mail: "root@gmail.com"}]
}