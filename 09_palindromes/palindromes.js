const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, "")
    console.log(newString)
    let backwards = ""
    for (let i = newString.length-1; i>=0; i--){
        backwards += newString[i]
    }
    if (newString === backwards){
        return true
    } else {
        return false
    }
};


// Do not edit below this line
module.exports = palindromes;
