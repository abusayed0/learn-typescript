{
    /*     
        generic constraints with keyof operator
     */

    type Professions = {
        teacher: string;
        developer: string;
        pilot: string;
        doctor: string;

    }

    type PersonProfession = keyof Professions;

    const personProfession: PersonProfession = "developer";




    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    };

    const user: {
        name: string;
        age: number;
        profession: string;
    } = {
        name: "jack",
        age: 18,
        profession: "student"
    };


    const result1 = getPropertyValue(user, "profession");
}