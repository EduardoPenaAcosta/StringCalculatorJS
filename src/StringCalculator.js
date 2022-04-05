
function sumTextToNumberCalculator(givenText){
    const arrayText = givenText.split(",");
    let resultNumber = 0;
    arrayText.forEach(elto => {
        if(!isNaN(parseInt(elto))){
            resultNumber += parseInt(elto);
        }
    })
    return resultNumber;
}

module.exports = sumTextToNumberCalculator;

