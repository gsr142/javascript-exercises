const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number"){
        return "ERROR"
    }else if (a>b){
        let x = 0
        for (let i=b; i<=a; i++){
            x+=i
        }
        return x
    }else{
        let x = 0
        for (let i=a; i<=b; i++){
            x+=i
        }
        return x
    }
};

// Do not edit below this line
module.exports = sumAll;
