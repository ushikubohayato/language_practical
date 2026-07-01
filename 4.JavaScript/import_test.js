//alert("test");

window.onload = function () {
    this.document.getElementById('submit').addEventListener('click', function () {
        submitButton()
    });
}

function submitButton(){
    const answer = document.getElementById('answer')
    let textForm1 = Number(document.getElementById('text_form_1').value)
    let textForm2 = Number(document.getElementById('text_form_2').value)
    let calcType = getCalcType()
    let calcResult = 0
    switch(calcType){
        case "plus":
            calcResult = textForm1 + textForm2
            break;
        case "minus":
            calcResult = textForm2 - textForm1
            break;
        case "multi":
            calcResult = textForm1 * textForm2
            break;
        case "div":
            calcResult = textForm1 / textForm2
            break;
        default:
            alert('calc type was not selected.')
            return false;
    }
    answer.innerHTML = calcResult;
}

function getCalcType(){
    let calcType = null
    document.getElementsByName('radio_calc_type').forEach(function(e){
        if(e.checked){
            calcType = e.value
        }
    })
    return calcType
}