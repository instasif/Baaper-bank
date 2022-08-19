//step-1: add event listener to the diposit button 
document.getElementById('btn-diposit').addEventListener('click', function(){
    //step-2: get the deposit ammount from the deposit input field
    //for input field use (.value) to the value inside the input field
    const depositField = document.getElementById('diposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    //step-3: get the current deposit total
    //for non-input(element other than input, textarea) use innerTExt to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //STEP-4:   add numbers to the total deposit
    const curerntDepositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total 
    depositTotalElement.innerText = curerntDepositTotal;

    //step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total
    balanceTotalElement.innerText =currentBalanceTotal;


    //step-7: clear the deposit field
    depositField.value = '';
})