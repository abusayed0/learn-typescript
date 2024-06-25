{
    /* 
        conditional type
     */


    type Data = null;

    type Status = Data extends null ? false : true;


    type Vehicle = {
        car: string;
        bike: string;
        horse: string;
        lion: string;
    }

    type CheckVehicle<T> = T extends keyof Vehicle ? true: false;


    type HasCar = CheckVehicle<"car">;
}