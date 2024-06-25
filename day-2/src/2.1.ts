// type assertion or type narrowing 


let variable:any;

variable = "jack";

const variableUpper: string = (variable as string).toUpperCase();
console.log(variableUpper);

const makeDouble = (num: number | string): string | number | undefined => {
    if(typeof num === "number"){
        return num * 2;
    }
    else if (typeof num === "string"){
        return `double is ${+num * 2}`
    }
    
};

const result1= makeDouble(5) as number;
const result2 = makeDouble("10") as string;

type ErrroType = {
    message:string;
}

try {
    
} catch (error) {
    console.log((error as ErrroType).message);
}