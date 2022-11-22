Array.prototype.uniq = function(){
    let ans = [];
    for(i = 0; i < this.length; i++){
        if (!ans.includes(this[i])){
            ans.push(this[i]);
        }
    };
    return ans
};

let a = [1,1,1,2,3]
console.log(a.uniq())
