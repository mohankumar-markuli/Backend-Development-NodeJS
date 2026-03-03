//  event listener

function attach_eventListeners_example1(){
    let count = 0;
    document.getElementById("click_me").addEventListener("click",function xyz() {
        console.log('button clicked',++count)
    });
}
// attach_eventListeners_example1();


// Garbage collection and remove eventListeners
//  to free up memory used by closures

function attach_eventListeners_example2(){
    let count = 0;
    document.getElementById("click_me").addEventListener("click",function xyz() {
        alert("Button was Clicked")
    });
}
attach_eventListeners_example2();

alert("Hello world")