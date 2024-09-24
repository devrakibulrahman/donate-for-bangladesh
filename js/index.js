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
    addId.classList.add(
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