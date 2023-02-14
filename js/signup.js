document.querySelector('.signup-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const newUser = getInputTextById('new-user');
    const newEmail = getInputTextById('new-email');
    const newPassword = getInputTextById('new-password');
    const rePassword = getInputTextById('re-password');
if (newEmail && newPassword) {
    if (newPassword === rePassword) {

        localStorage.setItem(newUser, JSON.stringify({
            Email: newEmail,
            Password: newPassword,
            Deposit: 0,
            Withdraw: 0,
            Balance: 1240
         }));
        // localStorage.setItem("Email", newEmail);
        // localStorage.setItem("Password", newPassword);
        loading('You have successfully created account. Please login now', './../index.html');
    } else {
        toastMessage('Password did not match!');
    }
} else {
    toastMessage('Please input valid email');
}
});