const header = document.querySelector(".header");
const lang = document.querySelector('.lang');

lang.addEventListener('click', () => {
  if (lang.checked) {
    document.querySelector('.en').classList.add('active')
    document.querySelector('.rus').classList.remove('active')
  }
  else {
    document.querySelector('.rus').classList.add('active')
    document.querySelector('.en').classList.remove('active')

  }
})
const menuOpen = document.querySelector('.menu__btn');
const menuCloose = document.querySelector('.cloose-menu');





menuOpen.addEventListener('click', () => {
  document.querySelector('.header__menu').classList.add('active');
})
menuCloose.addEventListener('click', () => {
  document.querySelector('.header__menu').classList.remove('active');
})




const links = document.querySelectorAll('.header__menu-link');

links.forEach((el) => {
  el.addEventListener('click', () => {
    document.querySelector('.header__menu').classList.remove('active');

  })
})

const linksBox = document.querySelectorAll('.header__menu-link-item');

linksBox.forEach((el) => {
  el.addEventListener('click', () => {
    document.querySelector('.header__menu').classList.remove('active');
  })
})

document.querySelector('.main').addEventListener('click', () => {
  document.querySelector('.header__menu').classList.remove('active');
})




const consulting = document.querySelector('.header__menu-link-wrap');

consulting.querySelector('.link-plus').addEventListener('click', () => {
  consulting.classList.toggle('active')
})


const sections = document.querySelectorAll('section');
// const tables = document.querySelectorAll('.pp-tableCell');
sections.forEach(el => {
  el.style.height = document.querySelector('html').clientHeight + "px";
})
// tables.forEach(el => {
//   el.style.height = window.screen.availHeight + "px";
// })


document.querySelector('.lang').addEventListener('click', () => {
  setTimeout(function () {
    window.location.href = 'http://artbliss-demo-en.barane8x.beget.tech';
  }, 1 * 100);
})
