function main() {
    setTimeout(() => { //T1
        console.log("Main Timer")
    }, 500)

    console.log("Main script");
    for(let i=0; i< 1000000; i++){
        // Image processing --> each image takes 2 secs
    }
}

main();


/* - console

Main script
    (timer waits for main thread to finish its task)
Main Timer

*/
