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