Array.prototype.bubbleSort = function(){
    let copy = [...this];
    let unsorted = true;
    let limit = copy.length

    while (unsorted){
        for (let i = 0; i < limit - 1; i++){
            if (copy[i] > copy[i+1]){
                let temp = copy[i];
                copy[i] = copy[i+1];
                copy[i+1] = temp;
            }
        };
        limit -= 1
        if (limit === 0){
            unsorted = false
        }
    };
    return copy
};
let arr = [342,1,24,5];
// console.log(arr.bubbleSort())


function range(start, end){
    if (start === end){
        return [end]
    };
    return [start].concat(range(start + 1, end))
};

console.log(range(1,5))


function sumRec(arr){
    if (arr.length === 1){
        return arr[0]
    } else{
        return arr[0] + sumRec.slice((arr[1, arr.length - 1]))
    }
};

console.log(sumRec([1,2,3,4,5]))
