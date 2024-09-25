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

// close and nav link function
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
    window.location.href = './blog.html';
});

// calculate function
function calculateBalance(input, balance, displayAmount, location){
    const inputField = input;
    const inputValue = parseFloat(inputField.value);

    
    const mainBalance = balance;
    const balanceValue = mainBalance.innerText;
    const balanceToFixed = parseFloat(balanceValue).toFixed(2);
    const balanceToNum = parseFloat(balanceToFixed);

    if(isNaN(inputValue)){
        mainBalance.innerText = balanceValue;
        alert('Invalid input amount!');
        return;
    };

    if(inputValue === 0 || inputValue < 0){
        alert('Invalid input amount!');
        inputField.value = '';
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

    const modal = document.getElementById('modal');
    modal.showModal();

    historyTab(inputValue, location);
    
    return;
};

// history tab functionality
function historyTab(donateAmount, location){
    const div = document.createElement('div');
    div.className = "w-full p-8 bg-white border border-[#1111111A] rounded-lg lg:rounded-2xl";

    const h1 = document.createElement('h1');
    h1.className = "font-lexend text-lg font-bold text-[#111111] mb-4 md:text-xl";
    
    const p = document.createElement('p');
    p.className = "font-lexend text-[13px] font-light text-[#111111B3] md:text-base";

    const donateAmountNum = donateAmount;
    const donateLocation = location;
    
    const localTime = new Date();

    h1.innerText = `${donateAmountNum} Taka is ${donateLocation}, Bangladesh`;
    p.innerText = `Date: ${localTime}`;

    const containerDiv = document.getElementById('container');
    containerDiv.appendChild(div);

    div.append(h1, p);

    return;
};

const donateButtonOne = document.getElementById('donateButton-1');
donateButtonOne.addEventListener('click', function(){
    const inputOne = document.getElementById('input-1');
    const balance = document.getElementById('balance');
    const displayAmountOne = document.getElementById('donateDisplay-1');
    const location = "Donated for Flood at Noakhali-2024";


    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');

    calculateBalance(inputOne, balance, displayAmountOne, location);
});

const donateButtonTwo = document.getElementById('donateButton-2');
donateButtonTwo.addEventListener('click', function(){
    const inputTwo = document.getElementById('input-2');
    const balance = document.getElementById('balance');
    const displayAmountTwo = document.getElementById('donateDisplay-2');
    const location = "Donated for Flood Relief in Feni"

    calculateBalance(inputTwo, balance, displayAmountTwo, location);
});

const donateButtonThree = document.getElementById('donateButton-3');
donateButtonThree.addEventListener('click', function(){
    const inputThree = document.getElementById('input-3');
    const balance = document.getElementById('balance');
    const displayAmountThree = document.getElementById('donateDisplay-3');
    const location = "Donated for Aid for Injured in the Quota Movement"

    calculateBalance(inputThree, balance, displayAmountThree, location);
});

// modal functionality
const modalBtn = document.getElementById('modalBtn');
modalBtn.addEventListener('click', function(){
    const modal = document.getElementById('modal');
    modal.classList.add('hidden')
});