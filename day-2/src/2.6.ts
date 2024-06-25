{
/*     
    constraints
    
 */

 const addRoleToUser = <T extends {id: number, name: string, email: string}, X>(user: T, role: X) : object => {
    return {
        ...user,
        role: role
    };
 };


 const newUser1 = addRoleToUser<{id: number, name:string, email: string, age: number}, string>({id: 1, name: "joe", email: "joe@gmail.com", age: 35}, "admin");

 const newUser2 = addRoleToUser<{id: number, name:string, email: string, city: string}, string>({id: 1, name: "joe", email: "joe@gmail.com", city: "syl"}, "admin");

}