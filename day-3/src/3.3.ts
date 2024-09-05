{
    // type guard

    // using type of 

    type functionPara =  string | number

    const add = (para1: functionPara, para2: functionPara): functionPara=>  {
        if(typeof para1 === "number" && typeof para2 === "number"){
            return para1 + para2;
        }
        else{
            return para1.toString() + para2.toString();
        }
    }
    const res = add(3, 5);
    console.log(res);


    // using in 
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: string;
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if("role" in user){
            console.log(`My name is ${user.name} and i have ${user.role} role.`);
        }else{
            console.log(`My name is ${user.name}.`);
        }
    }

    const normalUser: NormalUser = {
        name: "Jack",
    }

    const adminUser: AdminUser = {
        name: "Pead",
         role: "Admin"
    }

    getUser(normalUser);
    
}