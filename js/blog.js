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

function addOrRemove(addClass, removeClass){
    const add = addClass;
    add.classList.add(
        "right-[-120%]"
    );

    const remove = removeClass;
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

// blog page to home page switching event
const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', function(){
    window.location.href = './index.html';
});