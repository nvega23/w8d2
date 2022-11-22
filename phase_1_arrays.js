Array.prototype.uniq = function(){
    let ans = [];
    for(i = 0; i < this.length; i++){
        if (!ans.includes(this[i])){
            ans.push(this[i]);
        }
    };
    return ans
};

let a = [1,1,1,2,3,-1]
// console.log(a.uniq())

Array.prototype.twoSum = function(){
    let ans = [];
    for (i = 0; i < this.length - 1; i++){
        for (j = i+1; j < this.length; j++){
            if (this[i] + this[j] === 0){
                ans.push([i, j])
            }
        }
    }
    return ans;
}

// console.log(a.twoSum())

let arr = [
[1,2],
[3,4],
[5,6]
]


Array.prototype.transpose = function(){
    let ans = []//new Array(this[0].length).map(()=>([]))
    for (let i=0; i<this[0].length; i++){
        ans.push([])
    }
    for (i = 0; i < this.length; i++){
        // ans[i]
        for (j = 0; j < this[0].length; j++){
            ans[j].push(this[i][j])
        }
    }
    return ans
}

console.log(arr.transpose())
