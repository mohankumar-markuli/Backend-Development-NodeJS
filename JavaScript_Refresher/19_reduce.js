
const arr = [5,3,1,2,4,5,6];

function findSum(arr){
    let sum =0;
    for (let i =0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));


// reduce(function(accumulator,current_value),initial_value)
const output = arr.reduce(function (acc, curr){
    acc = acc + curr;
    return acc
}, 0);

console.log(output);

const output2 = arr.reduce(function(max,curr){
    if (curr > max){
        max = curr
    }
    return max
},0)

console.log(output2);

// use of reduce insted of map
reduced_arr = []
const reduce_output = arr.reduce(function abc(acc,curr){
    acc = curr *2
    reduced_arr.push(acc)
    return acc
},reduced_arr)

console.log('reduce result',reduced_arr)

function mapUsingReduce(array,operation) {
    let out_arr =[]
    array.reduce(function(acc, cur, idx, array){
        return out_arr.push(operation(cur))
    },out_arr)
    return out_arr
}

let mapResult = mapUsingReduce(arr,double)
console.log({mapResult})
