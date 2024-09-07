// Refference type 

const user : {
    name: string;
    age: number;
    readonly profession: string;
    type: string;
    isMarried:boolean;
    wife?: string; //optional
    country: "england" // literal
} = {
    name: "joe root",
    age : 28,
    profession: "cricketer",
    type: "batsman",
    isMarried: false,
    country: "england"
};
