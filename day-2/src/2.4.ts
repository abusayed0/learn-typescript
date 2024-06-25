{
    /*     
        generic with interface
     */


    interface Developer<T> {
        id: number;
        mail: string;
        salary: T;
        track: string;
        isAvailable: boolean;
    }


    const newDev1: Developer<string> = {
        id: 3434,
        mail: "joe@gmail.com",
        salary: "30000",
        track: "frontend",
        isAvailable: false
    };

    const newDev2: Developer<number> = {
        id: 334,
        mail: "joe@gmail.com",
        salary: 45000,
        track: "frontend",
        isAvailable: false
    };
}