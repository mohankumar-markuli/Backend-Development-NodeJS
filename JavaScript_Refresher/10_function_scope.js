function z(){                       //function z
    var b = 200
    function x(){                   //function x
        var a = 7;
        function y(){               //function y
            console.log(a,b)        
        }                           // closure(y)
        return y;
    }                               // closure(x)
    var p = x();
    console.log(p);
    p()
}                                   // closure(z)
z()
