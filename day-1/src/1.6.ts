// function 


// normal function
function add(num1 : number, num2 : number):number{
    return num1 + num2;
}

const result:number = add(3, 8);

// arrow function 
const multiply = (num1 : number, num2 : number) : number => {
    return num1 * num2;
};

// function inside object (method)
const student = {
    name: "jack",
    money: 0,
    addMoney(money : number){
        this.money = this.money + money;
    }
}