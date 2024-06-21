// function 

function add(num1 : number, num2 : number):number{
    return num1 + num2;
}

const result:number = add(3, 8);

const multiply = (num1 : number, num2 : number) : number => {
    return num1 * num2;
};


const student = {
    name: "jack",
    money: 0,
    addMoney(money : number){
        this.money = this.money + money;
    }
}