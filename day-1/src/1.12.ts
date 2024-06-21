{
    /* 
    null 
    unknow 
    never 
    */ 


    // null 
    const sayHi = (name: string | null) => {
        console.log(`hi ${name}`);
    }

    sayHi(null)


    // unknown
    const getHalf = (num:unknown) => {
        if(typeof num === "number"){
            return num / 2;
        }
        else if(typeof num === "string"){
            return Number(num) / 2;
        }
        else{
            return "Invalid input";
        }
    };
    
    const result = getHalf(false);
    console.log(result);


    // never 
    const giveError = ():never => {
        throw new Error("acbef");
        
    };
    giveError();
}
