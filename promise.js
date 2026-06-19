// promise = waiter who gives you a promise that he will give you something in the future.
// resoleve = the waiter gives you what he promised.
// reject = the waiter says he can't give you what he promised.
// state = pending, fulfilled, rejected


const foodorder = new Promise ((resolve, reject) => {
    const foodisready = true;
    if (foodisready) {
        resolve("Food is ready!");
    } else {
        reject("Food is not ready.");
    }
});

foodorder.then((message) => {
    console.log(message);
}
).catch((error) => {
    console.log(error);
});