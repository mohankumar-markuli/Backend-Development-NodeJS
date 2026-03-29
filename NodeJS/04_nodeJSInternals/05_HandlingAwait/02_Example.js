function wrappedPromise() {
    return new Promise((resolve) => {
        console.log("Inside Promise executor");
        resolve("done"); // P1
    });
}

async function main() {
    console.log(await wrappedPromise());
    console.log("End of script");   //P2
}

main();

/*
Console
-------------------------------------
Inside Promise executor
done
End of script
*/

