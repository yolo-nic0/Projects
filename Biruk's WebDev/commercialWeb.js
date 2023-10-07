window.addEventListener('scroll', handleScroll);

const nav = document.querySelector('.nav');

const handleScroll = () => {
  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};

let section = document.querySelectorAll('section');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('showAnimation');
    }
    else{
      sec.classList.remove('showAnimation');
    }
  })
}