{
    // access modifiers

    // public 
    // private
    // readonly
    // protected 

    class Student {
        readonly id: string;
        public name: string;
        public age: number;
        private _balance: number;

        constructor(id: string, name: string, age: number, _balance: number){
            this.id = id;
            this.name = name;
            this.age = age;
            this._balance = _balance;
        }

       public addBalance(balance: number){
            this._balance = this._balance + balance;
        };
        
       public payFee(balance: number){
            this._balance = this._balance - balance;
        };

       public knowBalance(){
            console.log(this._balance);
        }
    }

    const student =  new Student("4343", "Jodu", 24, 1000);
    console.log(student);
    student.knowBalance()
    student.addBalance(500);
    student.knowBalance();
    student.payFee(800);
    student.knowBalance();

    
}