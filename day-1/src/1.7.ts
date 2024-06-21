/* 
spread operator 
rest operator 
 */


// spread operator 
const fruits1 : string[] = ["mango", "orange", "banana"];
const fruits2 : string[] = ["guava", "lemon", "watermelon"];

const allFruits : string[] = [...fruits1, ...fruits2];

const student1 = {
    name: "jack",
    class: "xl",
    roll: 2
};

const student2 = {
    name: "root",
    class: "xl",
    roll: 8
};

const allStudents = {
    ...student1,
    ...student2
};


// rest operator 

const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
        console.log(`hello dear ${friend} !!!`);
    });
}

greetFriends("jodu", "modu", "kodu", "nudu");
