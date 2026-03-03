function x(){
    var i =1;
    setTimeout(function(){console.log(i);},10000)
    console.log("Mohan")
}
x()

function abc(){
    for (var i =1;i<=5;i++){
         setTimeout(function(){console.log(i);},i*1000)
    }
    console.log("Mohan")
}
abc()

function xyz(){
    for (let i =1;i<=5;i++){
         setTimeout(function(){console.log(i);},i*1000)
    }
    console.log("Mohan")
}
xyz()

//  can do using var 

function pqr(){
    for (let i =1;i<=5;i++)
    {
        function close(x)
        {
         setTimeout(function(){console.log(x);},x*1000)
        }
        close(i)
    }
    console.log("Mohan")
}
pqr()