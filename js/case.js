
function updateCaseNumber(isIncrese){

        const  caseNumberField = document.getElementById('case-number-field');
        const caseNumberFieldString = caseNumberField.value;
        const previouCaseNumber = parseInt(caseNumberFieldString);


        let newCaseNumber;

        if(isIncrese === true){
            newCaseNumber = previouCaseNumber + 1;
        }
        else{
            newCaseNumber = previouCaseNumber - 1;
        }

        caseNumberField.value = newCaseNumber;

        return newCaseNumber;

}

function updateCaseTotalPrice(newCaseNumber){

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){

   const newCaseNumber = updateCaseNumber(true);

   updateCaseTotalPrice(newCaseNumber);

})

document.getElementById('btn-case-minus').addEventListener('click', function(){

  const newCaseNumber = updateCaseNumber(false);

  updateCaseTotalPrice(newCaseNumber);

})













// document.getElementById('btn-case-plus').addEventListener('click', function(){

//     const  caseNumberField = document.getElementById('case-number-field');
//     const caseNumberFieldString = caseNumberField.value;
//     const previouCaseNumber = parseInt(caseNumberFieldString);


//     const newCaseNumber = previouCaseNumber + 1;
//     caseNumberField.value = newCaseNumber;

// })


// document.getElementById('btn-case-minus').addEventListener('click', function(){

//     const  caseNumberField = document.getElementById('case-number-field');
//     const caseNumberFieldString = caseNumberField.value;
//     const previouCaseNumber = parseInt(caseNumberFieldString);

//     const newCaseNumber = previouCaseNumber -1;
//     caseNumberField.value = newCaseNumber;

// })