{
    // opp ---> polymorphism

    class Payment{
        money: number;
        constructor(money: number){
            this.money = money;
        }
        getPayment(){
            return this.money;
        }
    }
    class StuPayment extends Payment{
        // money: number;
        // constructor(money: number){
        //     this.money = money;
        // }
        getPayment(){
            return this.money;
        }
    }
    class DevPayment extends Payment{
        // money: number;
        // constructor(money: number){
        //     this.money = money;
        // }
        getPayment(){
            return this.money;
        }
    }

    const student = new Payment(3000);
    // student do one tuition 

    const dev = new DevPayment(8000);
    // dev do one internship 

    const jobLess = new Payment(0);
    // someone who jobless 

    const knowPayment = (param: Payment) => {
        console.log(param.getPayment());
    }

    knowPayment(dev)
}