// responsive navbar
function addClassList(id){
    const addClassList = id;
    addClassList.classList.add(
        "right-[-120%]"
    );

    return;
};

function removeClassList(id){
    const removeClassList = id;
    removeClassList.classList.remove(
        "right-[0%]"
    );
}

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

const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', function(){
    const mobileNav = document.getElementById('mobileNav');
    addClassList(mobileNav);
    removeClassList(mobileNav);
});

const navLink = document.getElementById('navLink');
navLink.addEventListener('click', function(){
    const mobileNav = document.getElementById('mobileNav');
    addClassList(mobileNav);
    removeClassList(mobileNav);
});