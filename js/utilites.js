function getTextEelementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);

    return currentPhoneTotal;

}

function setTextElementValueById(elementId, value){

    const subTotalElement = document.getElementById('elementId');
    subTotalElement.innerText = value;

}

function calculateSubTotal(){

       // calculate total
       const currentPhoneTotal = getTextEelementValueById('phone-total');
       const currentCaseTotal = getTextEelementValueById('case-total');

       
       const currentSubTotal = currentPhoneTotal + currentCaseTotal;
       setTextElementValueById('sub-total', currentSubTotal);

     // calculate tex

     const texAmountString = (currentSubTotal * 0.1).toFixed(2);
     const taxAmount = parseFloat(texAmountString)
     setTextElementValueById('tax-amount', taxAmount);

     const finalAmount = currentSubTotal + texAmount;
     setTextElementValueById('final-total', finalAmount);

}
