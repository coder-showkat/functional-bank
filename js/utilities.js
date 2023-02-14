function toastMessage(msg) {
    document.body.style.overflowX = 'hidden';
    let div = document.createElement('div');
    div.innerText = 'ⓘ ' + msg;
    div.style.position = 'fixed';
    div.style.top = '1.5rem';
    div.style.right = '-400px';
    div.style.zIndex = '1000';
    div.style.fontWeight = '600';
    div.style.background = '#CCE8F4';
    div.style.color = '#07588e';
    div.style.transition = 'right .4s ease-in';
    div.style.padding = '.5rem .8rem';
    div.style.borderRadius = '.3rem';
    document.body.appendChild(div);
    setTimeout(()=>{
        div.style.right = '2rem';
    }, 400);
    setTimeout(()=>{
        div.style.right = '-600px';
        setTimeout(()=>{
            document.body.removeChild(div);
        }, 400);   
    }, 3000); 
}

function bankingLoading(msg, time) {
    let load = document.createElement('div');
    load.setAttribute('class', "fixed top-0 w-full h-[100vh] flex items-center justify-center z-50 bg-[rgba(255,255,255,0.2)]")
    let div = document.createElement('div');
    div.setAttribute('class', "w-[120px] h-[120px] border-[16px] border-[#f3f3f3] rounded-full border-t-[16px] border-t-[#3498db] animate-loading");
    load.appendChild(div);
    document.body.appendChild(load);

    toastMessage(msg);
    setTimeout(()=> {
        document.body.removeChild(load);
    }, time);
}

function loading(msg, location) {
    let load = document.createElement('div');
    load.setAttribute('class', "fixed top-0 w-full h-[100vh] flex items-center justify-center z-50 bg-[rgba(255,255,255,0.2)]")
    let div = document.createElement('div');
    div.setAttribute('class', "w-[120px] h-[120px] border-[16px] border-[#f3f3f3] rounded-full border-t-[16px] border-t-[#3498db] animate-loading");
    load.appendChild(div);
    document.body.appendChild(load);

    let loadingTime = (Math.floor(Math.random() * 7 + 3)) * 1000;
    toastMessage(msg);
    setTimeout(()=> {
        window.location.href = location;
    }, loadingTime);
}

function getInnerTextValueById(id) {
    const value = document.getElementById(id).innerText;
    const valueInNum = Number(value);
    return valueInNum;
}

function getInputValueById(id) {
    const value = document.getElementById(id).value;
    const valueInNum = Number(value);
    document.getElementById(id).value = '';
    return valueInNum;
}

function setNewTextValue(id, value) {
    if (value) {
        document.getElementById(id).innerText = value;
    } else {
        toastMessage('Please input valid amount');
    } 
}

function getInputTextById(id) {
    let value = document.getElementById(id).value;
    // document.getElementById(id).value = '';
    return value;
}

