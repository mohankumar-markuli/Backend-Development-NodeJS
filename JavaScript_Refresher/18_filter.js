
// filter
const new_arr = [5,1,3,4,5]

function isGreaterthenFour(x){
    return x>4;
}

const filter_output1 = new_arr.filter(isGreaterthenFour);
const filter_output2 = new_arr.filter(function odd(x){
    return x%2;
})

console.log(filter_output1)