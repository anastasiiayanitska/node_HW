
async function task1() {
   
    function promise1(): Promise<string> {
        return new Promise(resolve => 
            setTimeout(() => resolve("First promise"), 1000)
        );
    }

    function promise2(): Promise<string> {
        return new Promise(resolve => 
            setTimeout(() => resolve("Second promise"), 500)
        );
    }

    function promise3(): Promise<string> {
        return new Promise(resolve => 
            setTimeout(() => resolve("Three promise"), 1500)
        );
    }

    
    async function executePromisesSequentially() {
        console.log("Start running");
        
        const result1 = await promise1();
        console.log(result1);
        
        const result2 = await promise2();
        console.log(result2);
        
        const result3 = await promise3();
        console.log(result3);
        
        console.log("All promises done");
    }

    await executePromisesSequentially();
}




async function task2() {
    const strings = ["Hallo", "HW23", "typescript"];
    function processString(str: string): Promise<string> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(str.toUpperCase());
            }, 1000);
        });
    }

    
    async function processStrings(arr: string[]) {
        const promises = arr.map(str => processString(str));
        const results = await Promise.all(promises);
        console.log(results);
    }

    await processStrings(strings);
}



async function task3() {
    const promise1 = new Promise<string>(resolve => 
        setTimeout(() => resolve("Done1"), 1000)
    );

    const promise2 = new Promise<string>((_, reject) => 
        setTimeout(() => reject(new Error("Error")), 800)
    );

    const promise3 = new Promise<string>(resolve => 
        setTimeout(() => resolve("Done 3"), 1200)
    );

    async function executeWithErrorHandling() {
        try {
            const results = await Promise.all([promise1, promise2, promise3]);
            console.log(results);
        } catch (error:any) {
            console.error("Error",  error);
        }
    }

    await executeWithErrorHandling();
}
 


async function task4() {
    const numbers = [1000, 2000, 500, 1500];

    function createDelayedPromise(delay: number): Promise<string> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`Seconds:  ${delay}`);
            }, delay);
        });
    }

    async function processNumbers(nums: number[]) {
        const promises = nums.map(num => createDelayedPromise(num));
        const results = await Promise.all(promises);
        console.log(results);
    }

    await processNumbers(numbers);
}

