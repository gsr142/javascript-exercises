const removeFromArray = function(arr, ...args) {
    let array1 = [];
    arr.forEach((item) => {
        if(!args.includes(item)){
            array1.push(item)
        }
    })
    return array1
};


// Do not edit below this line
module.exports = removeFromArray;
