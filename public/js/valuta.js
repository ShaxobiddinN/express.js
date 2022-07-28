let inpNum = document.getElementById('num')
let result = document.getElementById('value')

function convert(value){
    let num = parseInt(inpNum.value)
    if (value == "som") {
        result.value = num/11000
    } else if (value == "dollar") {
        result.value = num*11000 
    }
}
