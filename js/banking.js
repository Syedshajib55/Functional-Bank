// function doubleIt(num){
// 	return num*2;
// }
// const first = doubleIt(2);

function getInputValue(inputId){
	const inputField = document.getElementById(inputId);
	const inputAmountText  = inputField.value;
	const amountValue = parseFloat(inputAmountText);
	//clear input field
	inputField.value = '';
	return amountValue;	
}

function updateTotalField(totalFieldId ,amount){
	const totalElement = document.getElementById(totalFieldId);
	const totalText = totalElement.innerText;
	const previousTotal = parseFloat(totalText);
	totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
	const balanceTotal = document.getElementById('balance-total');
	const balanceTotalText = balanceTotal.innerText;
	const previousBalanceTotal = parseFloat(balanceTotalText);
	return previousBalanceTotal;
}

function updateBalance(amount, isAdd){
	 const balanceTotal = document.getElementById('balance-total');
	// const balanceTotalText = balanceTotal.innerText;
	// const previousBalanceTotal = parseFloat(balanceTotalText);
	const previousBalanceTotal = getCurrentBalance();
	if(isAdd== true){
		balanceTotal.innerText = previousBalanceTotal +  amount;
	}
	else {
		balanceTotal.innerText = previousBalanceTotal - amount;
	}
	
}

document.getElementById("deposit-button").addEventListener('click',function(){
	// const depositInput = document.getElementById('deposit-input');
	// const depositAMount = depositInput.value;
	
	//get and update deposit total	
	// const depositTotal = document.getElementById('deposit-total');
	// const depositTotalText = depositTotal.innerText;
	// const previousDepositTotal = parseFloat(depositTotalText);

	// depositTotal.innerText = previousDepositTotal + depositAMount;


	// console.log(depositTotal);
	// clear input field
	//depositInput.value = '';

	//update balance
	// const balanceTotal = document.getElementById('balance-total');
	// const balanceTotalText = balanceTotal.innerText;
	// const previousBalanceTotal = parseFloat(balanceTotalText);

	// balanceTotal.innerText = previousBalanceTotal +parseFloat (depositAMount);
	const depositAmount  = getInputValue('deposit-input');
	if(depositAmount > 0){
		updateTotalField('deposit-total',depositAmount);
		updateBalance(depositAmount, true);
	}
	


})
//Withdraw handle
document.getElementById('withdraw-button').addEventListener('click',function(){
		// const withdrawInput = document.getElementById('withdraw-input');
		// const withdrawAmountText = withdrawInput.value;
		// console.log(withdrawAmountText);
		

		//update withdraw total
		// const withdrawTotal = document.getElementById('withdraw-total');
		// const withDrawTotalText = withdrawTotal.innerText;

		// withdrawTotal.innerText = parseFloat(withDrawTotalText) + parseFloat (withdrawAmountText);
		

		//update balance withdraw total
		// const balanceTotal = document.getElementById('balance-total');
		// const balanceTotalText = balanceTotal.innerText;
		// const previousBalanceTotal = parseFloat (balanceTotalText);

		// balanceTotal.innerText = previousBalanceTotal -  parseFloat(withdrawAmountText);
		const withdrawAmount = getInputValue('withdraw-input');
		const currentBalance = getCurrentBalance();
		if(withdrawAmount > 0 && withdrawAmount < currentBalance){
			updateTotalField('withdraw-total',withdrawAmount);
			updateBalance(withdrawAmount, false);
		}
		if(withdrawAmount > currentBalance){
			console.log('You can not withdraw more than what you have in your account');
		}
	
})