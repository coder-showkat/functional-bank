document.querySelector('.withdraw-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const totalWithdraw = getInnerTextValueById('ttl-withdraw');
    const totalBalance = getInnerTextValueById('ttl-balance');
    const withdraw = getInputValueById('inp-withdraw');
    const newTotalWithdraw = totalWithdraw + withdraw;
    const newTotalBalance = totalBalance - withdraw;
    if (newTotalWithdraw > totalWithdraw) {
        if (newTotalBalance >= 0) {
            let bankingLoadingTime = (Math.floor(Math.random() * 4 + 2)) * 1000;
            bankingLoading('Please wait..', bankingLoadingTime);
            setTimeout(()=>{
                setNewTextValue('ttl-withdraw', newTotalWithdraw);
                setNewTextValue('ttl-balance', newTotalBalance);
            }, bankingLoadingTime);
        } else {
            toastMessage('Insufficient fund!');
        }
    } else {
        toastMessage('Please input valid amount');
    }
});


document.getElementById('logout').addEventListener('click', ()=>{
    loading('Logout successful!', '../index.html')
})