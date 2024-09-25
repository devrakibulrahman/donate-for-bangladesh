// responsive navbar
const openBtn = document.getElementById('openBtn');
openBtn.addEventListener('click', function(){
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.add(
        "right-[0%]"
    );

    mobileNav.classList.remove(
        "right-[-120%]"
    );
});

function addOrRemove(addId, removeId){
    const add = addId;
    add.classList.add(
        "right-[-120%]"
    );

    const remove = removeId;
    remove.classList.remove(
        "right-[0%]"
    );

    return;
};

const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', function(){
    const mobileNav = document.getElementById('mobileNav');
    addOrRemove(mobileNav, mobileNav);
});

const navLink = document.getElementById('navLink');
navLink.addEventListener('click', function(){
    const mobileNav = document.getElementById('mobileNav');
    addOrRemove(mobileNav, mobileNav);
});

// donate to history tab switching function
function tabBtnSwitch(btnAdd1, btnRemove1, btnAdd2, btnRemove2, tab1, tab2){
    const buttonAdd1 = btnAdd1;
    buttonAdd1.classList.add(
        "bg-[#B4F461]",
        "border-[#B4F461]",
        "text-[#111111]",
    );

    const buttonRemove1 = btnRemove1;
    buttonRemove1.classList.remove(
        "bg-white",
        "border-[#1111114D]",
        "text-[#111111B3]",
        "hover:bg-[#B4F461]",
        "hover:border-[#B4F461]",
        "hover:text-[#111111]",
        "transition",
        "duration-200",
        "ease-in-out"
    );

    const buttonAdd2 = btnAdd2;
    buttonAdd2.classList.add(
        "bg-white",
        "border-[#1111114D]",
        "text-[#111111B3]",
        "hover:bg-[#B4F461]",
        "hover:border-[#B4F461]",
        "hover:text-[#111111]",
        "transition",
        "duration-200",
        "ease-in-out"
    );

    const buttonRemove2 = btnRemove2;
    buttonRemove2.classList.remove(
        "bg-[#B4F461]",
        "border-[#B4F461]",
        "text-[#111111]",
    );

    const tabHidden1 = tab1;
    tabHidden1.classList.add(
        "hidden"
    );

    const tabHidden2 = tab2;
    tabHidden2.classList.remove(
        "hidden"
    );

    return;
};

const historyBtn = document.getElementById('historyBtn');
historyBtn.addEventListener('click', function(){
    const historyBtn = document.getElementById('historyBtn');
    const donateBtn = document.getElementById('donateBtn');
    const donateTab = document.getElementById('donateTab');
    const historyTab = document.getElementById('historyTab');

    tabBtnSwitch(historyBtn, historyBtn, donateBtn, donateBtn, donateTab, historyTab);
});

const donateBtn = document.getElementById('donateBtn');
donateBtn.addEventListener('click', function(){
    const historyBtn = document.getElementById('historyBtn');
    const donateBtn = document.getElementById('donateBtn');
    const donateTab = document.getElementById('donateTab');
    const historyTab = document.getElementById('historyTab');

    tabBtnSwitch(donateBtn, donateBtn, historyBtn, historyBtn, historyTab, donateTab);
});

// home page to blog page switching event
const blogBtn = document.getElementById('blogBtn');
blogBtn.addEventListener('click', function(){
    window.location.href = '../blog.html?#';
});

// calculation part

// function for calculation
// function calculateBalance(input, balance, displayAmount){
//     const input = input;
//     const inputValue = parseFloat(input.value);

//     const balance = balance;
//     const balanceValue = balance.innerText;
//     const balanceToFixed = balanceValue.toFixed(2);
//     const balanceToNum = parseFloat(balanceToFixed);

//     const displayAmount = displayAmount;
//     const displayAmountToNumValue
//     const displayAmountToNum = parseFloat(displayAmountToNumValue.value);

//     const donateAmountShow = displayAmountToNumValue + inputValue;
    

// }



// const donateButton = document.getElementById('donateButton');
// donateButton.addEventListener('click', function(){
//     const input = document.getElementById('input');
//     const inputValue = parseFloat(input.value);
    
//     const balance = document.getElementById('balance');
//     const balanceToNum = parseFloat(balance.innerText);

//     if(balance < 0 || balanceToNum < inputValue){
//         alert('you have no enough money');
//         return;
//     }

//     const displayAmount = document.getElementById('donateDisplay');
//     const displayAmountToNum = parseFloat(displayAmount.innerText);

//     const addAmount = displayAmountToNum + inputValue;
//     displayAmount.innerText = addAmount;

//     const subtractAmount = balanceToNum - inputValue;
//     balance.innerText = subtractAmount;

// });

// calculate function
function calculateBalance(input, balance, displayAmount){
    const inputField = input;
    const inputValue = parseFloat(inputField.value);

    
    const mainBalance = balance;
    const balanceValue = mainBalance.innerText;
    const balanceToFixed = parseFloat(balanceValue).toFixed(2);
    const balanceToNum = parseFloat(balanceToFixed);

    if(isNaN(inputValue)){
        mainBalance.innerText = balanceValue;
        return;
    };

    const displayAmountNum = displayAmount;
    const displayAmountToNumValue = displayAmountNum.innerText;
    const displayAmountToNum = parseFloat(displayAmountToNumValue);
    
    if(mainBalance < 0 || balanceValue < inputValue){
        alert('you have no more enough money in your account');
        return;
    };
    
    const donateAmountShow = displayAmountToNum + inputValue;
    displayAmountNum.innerText = donateAmountShow;
    
    const donateAmountSubtractToBalance = balanceToNum - inputValue;
    mainBalance.innerText = donateAmountSubtractToBalance;
    
    inputField.value = '';
    
    return;
};

const donateButtonOne = document.getElementById('donateButton-1');
donateButtonOne.addEventListener('click', function(){
    const inputOne = document.getElementById('input-1');
    const balance = document.getElementById('balance');
    const displayAmountOne = document.getElementById('donateDisplay-1');

    if(inputOne === ''){
        balance.innerText;
        return;
    };

    // emptyValidation(inputOne, balance);
    calculateBalance(inputOne, balance, displayAmountOne);
});

const donateButtonTwo = document.getElementById('donateButton-2');
donateButtonTwo.addEventListener('click', function(){
    const inputTwo = document.getElementById('input-2');
    const balance = document.getElementById('balance');
    const displayAmountTwo = document.getElementById('donateDisplay-2');

    // emptyValidation(inputTwo, balance);
    calculateBalance(inputTwo, balance, displayAmountTwo);
});

const donateButtonThree = document.getElementById('donateButton-3');
donateButtonThree.addEventListener('click', function(){
    const inputThree = document.getElementById('input-3');
    const balance = document.getElementById('balance');
    const displayAmountThree = document.getElementById('donateDisplay-3');

    // emptyValidation(inputThree, balance);
    calculateBalance(inputThree, balance, displayAmountThree);
});

// history tab functionality
