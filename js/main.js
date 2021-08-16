document.getElementById('deposit-submit').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);


    const depositTotal = document.getElementById('deposit-total');

    const preDepAmountText = depositTotal.innerText;
    const preDepAmount = parseFloat(preDepAmountText);

    const newDepAmount = preDepAmount + depositAmount;
    depositTotal.innerText = newDepAmount;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = preBalanceTotal + newDepAmount;

    balanceTotal.innerText = newBalanceTotal;

    depositInput.value = '';


    document.getElementById('withdraw-submit').addEventListener('click', function () {
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrowAmountText = withdrawInput.value;
        const newWithdrawAmount = parseFloat(withdrowAmountText);

        const withdrawTotal = document.getElementById('withdraw-total');
        const preWithdrawText = withdrawTotal.innerText;
        const preWithdrawTotal = parseFloat(preWithdrawText);

        const newWithdrawTotal = preWithdrawTotal + newWithdrawAmount;

        withdrawTotal.innerText = newWithdrawTotal;
        withdrawInput.value = '';


        const balanceTotal = document.getElementById('balance-total');
        const preBalanceText = balanceTotal.innerText;
        const preBalanceTotal = parseFloat(preBalanceText);
        const newBalanceTotal = preBalanceTotal - newWithdrawAmount;

        balanceTotal.innerText = newBalanceTotal;


    })
})