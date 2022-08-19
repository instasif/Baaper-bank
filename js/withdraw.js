/**
 * 1. add event handler with the withdraw button
 * 2. get the withdraw amount from the withdraw input field
 * 2(5). also make sure to convert the input into number by using parseFloat
 * 3. get previous withdraw total
 * 4. calculate total withdraw amount
 * 5. calculate total withdraw amount
 * 5(5). set total withdraw ammount
 * 6. get the total balance element
 * 6(5). calculate new balance total
 * 7.clear the input withdraw field 
 */
    //step-1: 
    document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    //step-7: 
    withdrawField .value= '';
})