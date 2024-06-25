{
    /*     
        promise 
     */
    type PromiseRes = string | { success: boolean; data: string };

    const createPromise = ():  Promise<PromiseRes>=> {
        return new Promise<PromiseRes>((resolve, reject) => {
            const conditionVariable: boolean = false;
            if (conditionVariable) {
                resolve({ success: true, data: "hello world" })
            }
            else {
                reject("Failed!!!!!!!!")
            }
        })
    };

    const callPromise = async (): Promise<PromiseRes> => {
        const result: PromiseRes = await createPromise();
        console.log(result);
        return result;
    }

    callPromise();

} 