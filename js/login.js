document.querySelector('.login-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const user = getInputTextById('user');
    const email = getInputTextById('email');
    const password = getInputTextById('password');
    let keys = [];
    for (let key in localStorage){
        keys.push(key);
     }
     if (keys.includes(user)) {
        if ((email === JSON.parse(localStorage.getItem(user)).Email) && (password === JSON.parse(localStorage.getItem(user)).Password)) {
            let message = 'Hi ' + user + '! Welcome to your Baap-er bank';
            loading(message, './../bank.html');
        } else {
            toastMessage('Your email or password is incorrect');
        }
    } else {
        toastMessage("You have no account by this username");
    }
});