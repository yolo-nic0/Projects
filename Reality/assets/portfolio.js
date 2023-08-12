const .nav = document.getElementById('nav');

window.addEventListener("scroll", () => {
    var y = window.scrollY;
    if (y >= 15){
        nav.classList.add('disappear');
        return;
    }
    else{
        nav.classList.remove('disappear');
    }
});