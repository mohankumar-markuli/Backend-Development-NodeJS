//  event listener

function attach_eventListeners(){
    let count = 0;
    document.getElementById("click_me").addEventListener("click",function xyz() {
        console.log('button clicked',++count)
    });
}
attach_eventListeners();


// Garbage collection and remove eventListeners
//  to free up memory used by closures