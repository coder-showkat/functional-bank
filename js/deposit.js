document.querySelector('.deposit-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const totalDeposit = getInnerTextValueById('ttl-deposit');
    const totalBalance = getInnerTextValueById('ttl-balance');
    const deposit = getInputValueById('inp-deposit');
    const newTotalDeposit = totalDeposit + deposit;
    const newTotalBalance = totalBalance + deposit;
    if (newTotalDeposit > totalDeposit) {
        let bankingLoadingTime = (Math.floor(Math.random() * 4 + 2)) * 1000;
        bankingLoading('Please wait..', bankingLoadingTime);
        setTimeout(()=>{
        setNewTextValue('ttl-deposit', newTotalDeposit);
        setNewTextValue('ttl-balance', newTotalBalance);
        }, bankingLoadingTime);
    } else {
        toastMessage('Please input valid amount');
    }
});