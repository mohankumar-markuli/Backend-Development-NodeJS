function x(){
    var a = 7;
    function y(){
        console.log(a)
        var b =7
        function z(){
        console.log(b)
        }
        z();
    }
    y();
    console.log(a)
}
x();